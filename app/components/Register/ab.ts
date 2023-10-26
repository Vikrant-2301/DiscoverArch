import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

type StudentForm = {
  students: {
    name: string;
    email: string;
    phone: string;
    academicYear: string;
    dob: string;
    collegeName: string;
  }[];
};

export async function POST(request: NextRequest) {
  try {
    const body: StudentForm = await request.json();
    const students = body.students;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Modify the range and spreadsheetId according to your Google Sheets
    const range = "A1:Z1"; // Change this to the desired range
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const values = students.map((student) => [
      student.email,
      student.name,
      student.phone,
      student.academicYear,
      student.dob,
      student.collegeName,
    ]);
    
    // Concatenate all the student arrays into a single array
    const allStudentData = values.reduce((acc, studentData) => [...acc, ...studentData], []);
    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [allStudentData],
      },
    });
    

    console.log('Successful response:', response.data);
    return NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (authError) {
    console.error('Authentication Error:', authError);
    return NextResponse.json({ msg: "failed", error: authError }, { status: 500 });
  }
}


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
  paymentData: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  };
};

export async function POST(request: NextRequest) {
  try {
    const body: StudentForm = await request.json();
    const students = body.students;
    const paymentData = body.paymentData;

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

    // Define the range and spreadsheetId
    const range = "A2:Z2"; // Update this to the desired range (A to Z columns)
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Create an array for student values
    const studentValues = students.map((student) => [
      student.email,
      student.name,
      student.phone,
      student.academicYear,
      student.dob,
      student.collegeName,
    ]);

    // Append an empty string for each column between F and Z (inclusive) to make sure paymentData is in column Z
    const emptyColumns = Array.from({ length: 18 }, () => '');
    studentValues[0].push(...emptyColumns);

    // Add the payment ID to the end (now it's in the Z column)
    studentValues[0].push(paymentData.razorpay_payment_id);

    // Append the values to the Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: studentValues,
      },
    });

    console.log('Successful response:', response.data);
    return NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (authError) {
    console.error('Authentication Error:', authError);
    return NextResponse.json({ msg: "failed", error: authError }, { status: 500 });
  }
}

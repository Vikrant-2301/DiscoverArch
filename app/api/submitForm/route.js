import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export default async function submitForm(request) {
  if (request.method === "POST") {
    // Handle POST requests
    const formData = request.body;

    try {
      // Your Google Sheets API code here

      return new NextResponse({
        status: 200,
        body: JSON.stringify({ message: "Data written to Google Sheets" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error writing data to Google Sheets:", error);
      return new NextResponse({
        status: 500,
        body: JSON.stringify({ error: "Internal server error" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } else {
    // Handle other HTTP methods or invalid requests
    return new NextResponse({
      status: 405,
      body: "Method Not Allowed",
    });
  }
}

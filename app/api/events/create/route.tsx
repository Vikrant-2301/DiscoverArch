import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Event from "@/models/eventModel";
import axios from "axios";
import User from "@/models/userModel";
import tokenData from "@/helpers/tokenData";

connect();

export async function POST(request: NextRequest) {
  try {
    console.log("GET request");

    const userId = await tokenData(request);
    console.log(userId);
    // console.log(userId);
    // find the user from database
    const user = await User.findById(userId).select("-password");
    // console.log(user.username);
    if (!user) {
      return NextResponse.json({ error: "No user found" }, { status: 400 });
    }

    console.log("User Info:", user);

    const reqBody = await request.json();
    const { name, date, time, venue, ticketPrice } = reqBody;

    // Check if user exists and is an admin
    if (!user || !user.isAdmin) {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }

    console.log("Creating events...");

    // Create the event
    const event = await Event.create({
      name,
      date,
      time,
      venue,
      ticketPrice,
      attendees: [], // Initially, the event has no attendees.
    });

    console.log("Event created:", event);

    return NextResponse.json(event);
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

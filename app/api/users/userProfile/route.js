import { NextRequest, NextResponse } from "next/server";
import getDataFromToken from "@/helpers/tokenData";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { log } from "console";
import tokenData from "@/helpers/tokenData";

connect();

export async function GET(request) {
  try {
    // find the user from cookie token
    // console.log("fetching user...");
    const userId = await tokenData(request);
    console.log(userId);
    // console.log(userId);
    // find the user from database
    const user = await User.findById(userId).select("-password");
    // console.log(user.username);
    if (!user) {
      return NextResponse.json({ error: "No user found" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "User found successfully",
      user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

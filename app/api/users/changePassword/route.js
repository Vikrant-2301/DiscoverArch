import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function POST(request) {
  try {
    const { token, password } = await request.json();

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });
    // console.log(user);

    if (!user) {
      return new NextResponse.JSON(
        { error: "No user found!" },
        { status: 404 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log(hashedPassword);
    user.password = hashedPassword;
    await user.save();

    return new NextResponse.JSON(
      { message: "Password Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse.JSON({ error: error.message }, { status: 500 });
  }
}

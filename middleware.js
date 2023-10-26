import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function middleware(req, res) {
  const path = req.nextUrl.pathname;
  const isPublic = path === "/login" || path === "/signUp";
  const token = req.cookies.get("token")?.value || "";

  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl)); // Redirect using NextResponse
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
  matcher: ["/", "/login", "/signup"],
};

export async function getUser(req, res) {
  if (req.cookies.token !== undefined) {
    const user = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
    req.user = user;
  } else {
    return res.status(401).json({ message: "User Not Logged In" });
  }
}

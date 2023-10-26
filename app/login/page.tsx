"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import User from "@/models/userModel";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      // console.log(response);
      const userInfo = await axios.get("/api/users/userProfile");
      const userData = await userInfo.data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      setTimeout(() => {}, 500);
      toast.success("logged in");
      setLoading(false);
      router.push("/");
    } catch (error: any) {
      toast.error("Invalid Credentials");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen ">
      <h1 className="mb-4 text-3xl">{loading ? "Processing" : "Login"}</h1>
      <hr />
      <div className="email space-x-12">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 border border-gray-300 text-black rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="email"
        />
      </div>
      <div className="password space-x-4">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          type="text"
          id="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="password"
        />
      </div>
      <button
        className={`p-2 border border-gray-300 text-black rounded-lg mb-4 focus:outline-none focus:border-gray-600 ${
          buttonDisabled
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "border border-gray-300 text-black focus:bg-gray-600 focus:outline-none hover:text-black"
        }`}
        onClick={onLogin}
        disabled={buttonDisabled}
      >
        Login
      </button>
      <Link href="/signup">New User ? SignUp </Link>
      <Toaster />
    </div>
  );
}

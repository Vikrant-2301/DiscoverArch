"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

// Everything is fixed
// Check forgot password once
// Make sure to correct verify emial login button

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);
      toast.success("User signed up");
      // console.log("SignUp Success");
      setLoading(false);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen ">
      <h1 className="mb-4 text-3xl">{loading ? "Processing" : "Sign Up"}</h1>
      <hr />
      <div className="username space-x-4">
        <label htmlFor="username">Username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          placeholder="username"
        />
      </div>
      <div className="email space-x-12">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
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
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
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
        className={`p-2 border border-gray-300 rounded-lg mb-4  focus:outline-none focus:border-gray-600 ${
          buttonDisabled
            ? "bg-gray-200 text-gray-600 cursor-not-allowed"
            : "border border-gray-300 text-black focus:bg-gray-600 focus:outline-none hover:text-black"
        }`}
        onClick={onSignup}
        disabled={buttonDisabled}
      >
        Sign Up
      </button>
      <Link href="/login">Already a user ? Login here </Link>
      <Toaster />
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const Forgotpassword = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const [showEmailSent, setShowEmailSent] = useState(false); // State to control the pop-up

  useEffect(() => {
    if (user.email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onForgotEmailVerify = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgotpassword", user);

      // Assuming the API sends an email verification link

      console.log("Email Sent:", response.data);

      await toast.promise(
        Promise.resolve(),
        {
          loading: "Sending email...",
          success: "Email sent successfully!",
          error: "An error occurred while sending the email.",
        },
        { duration: 3000 }
      );

      // Show the pop-up
      setShowEmailSent(true);

      // Automatically redirect after 3 seconds
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Email Not Found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-white bg-black justify-center py-2 min-h-screen">
      <Link href="/" className="mr-4 text-4xl absolute left-4 top-4">
        &larr;
      </Link>
      <h1 className="mb-8 text-3xl">Forgot Password</h1>
      <hr className="w-16 border-t-2 border-blue-500 mb-8" />
      <form className="flex flex-col items-center space-y-4">
        <div className="w-full max-w-xs">
          <label htmlFor="email" className="block my-4 text-white">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:border-gray-600"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ email: e.target.value })}
          />
        </div>
        <button
          className={`w-full py-2 px-6 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 ${
            buttonDisabled ? "bg-slate-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={buttonDisabled}
          onClick={onForgotEmailVerify}
        >
          {loading ? "Sending Email..." : "Send Verification Email"}
        </button>
      </form>
      <div className="flex flex-col items-center my-2 space-y-2">
        <Link href="/login" className="text-blue-500 hover:underline">
          Remember your password? Login
        </Link>
      </div>

      {showEmailSent && (
        <div className="fixed bottom-4 right-4 bg-white text-green-500 p-4 rounded-md shadow-md">
          Email sent. Please check your email.
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default Forgotpassword;

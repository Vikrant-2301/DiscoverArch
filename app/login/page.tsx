// "use client";
// import axios from "axios";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Router } from "next/router";
// import User from "@/models/userModel";
// import toast, { Toaster } from "react-hot-toast";

// export default function LoginPage() {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const router = useRouter();
//   const onLogin = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/login", user);
//       // console.log(response);
//       const userInfo = await axios.get("/api/users/userProfile");
//       const userData = await userInfo.data.user;
//       localStorage.setItem("user", JSON.stringify(userData));
//       setTimeout(() => {}, 500);
//       toast.success("logged in");
//       setLoading(false);
//       router.push("/");
//     } catch (error: any) {
//       toast.error("Invalid Credentials");
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user.email.length > 0 && user.password.length > 0) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     <div className="flex flex-col items-center justify-center py-2 min-h-screen ">
//       <h1 className="mb-4 text-3xl">{loading ? "Processing" : "Login"}</h1>
//       <hr />
//       <div className="email space-x-12">
//         <label htmlFor="email">Email</label>
//         <input
//           className="p-2 border border-gray-300 text-black rounded-lg mb-4 focus:outline-none focus:border-gray-600"
//           type="text"
//           id="email"
//           value={user.email}
//           onChange={(e) => {
//             setUser({ ...user, email: e.target.value });
//           }}
//           placeholder="email"
//         />
//       </div>
//       <div className="password space-x-4">
//         <label htmlFor="password">Password</label>
//         <input
//           className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
//           type="text"
//           id="password"
//           value={user.password}
//           onChange={(e) => {
//             setUser({ ...user, password: e.target.value });
//           }}
//           placeholder="password"
//         />
//       </div>
//       <button
//         className={`p-2 border border-gray-300 text-black rounded-lg mb-4 focus:outline-none focus:border-gray-600 ${
//           buttonDisabled
//             ? "bg-gray-200 text-gray-600 cursor-not-allowed"
//             : "border border-gray-300 text-black focus:bg-gray-600 focus:outline-none hover:text-black"
//         }`}
//         onClick={onLogin}
//         disabled={buttonDisabled}
//       >
//         Login
//       </button>
//       <Link href="/signup">New User ? SignUp </Link>
//       <Toaster />
//     </div>
//   );
// }
"use client";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import User from "@/models/userModel";
import toast, { Toaster } from "react-hot-toast";
import { LockClosedIcon } from "@heroicons/react/20/solid";

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
    <>
      <div className="flex flex-col items-center justify-center py-2 min-h-screen ">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/images/logo_nonbg.png"
              alt="Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            className={`group relative flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              buttonDisabled
                ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                : "border border-gray-300 text-black focus:bg-gray-600 focus:outline-none hover:text-black"
            }`}
            onClick={onLogin}
            disabled={buttonDisabled}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Login
          </button>
          <div className="mt-4 flex justify-end">
            <Link href="/signup">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                New User? SignUp
              </button>
            </Link>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
}

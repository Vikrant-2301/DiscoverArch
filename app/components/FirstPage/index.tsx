"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const FirstPage = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/Register");
  };
  return (
    <div className="first">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto bg-white lg:flex sm:w-full">
          <div className="relative w-full lg:w-1/2 h-80 lg:h-screen">
            <img
              src="../images/competition/Architopia.jpeg"
              alt="Architopia"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 w-full lg:w-1/2">
            {/* <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Welcome To,
              </p>
            </div> */}
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              ARCHITOPIA: An Architect Abode
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">ARCHITOPIA </span> is more than just a
              competition; it is your canvas for creativity, inviting architects
              and design enthusiasts worldwide to reimagine the art of dwelling.
              Immerse yourself in a world of architectural innovation and
              sustainable design as you redefine the concept of home. This is
              your opportunity to shape the future of architectural excellence.
            </p>
            <div className="flex items-center">
              <button
                type="submit"
                onClick={handleRegister}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide bg-blue text-white transition duration-200  shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none rounded-full hover:bg-hoblue"
              >
                Register Now
              </button>
              <a
                href="/Brief.pdf"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Download Brief
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

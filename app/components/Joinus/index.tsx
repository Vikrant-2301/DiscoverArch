import React from "react";

const Join = () => {
  return (
    <div className="bg-joinus my-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest">
            JOIN US
          </h3>
          <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10">
            {" "}
            Be the first to know when <br /> new competitions are launched!
          </h2>
          {/* <p className="text-lightblack text-base font-normal">
            By becoming a part of our network, you will gain exclusive access to
            innovative design <br /> challenges, opportunities to showcase your
            talent.
          </p> */}
        </div>

        <div className="mx-auto max-w-4xl pt-5">
          <form className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your name"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                placeholder="Your email"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
              >
                Join!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;

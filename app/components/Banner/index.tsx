import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative grid z-0 overflow-hidden">
      <div className="pt-[96px] justify-stretch bg-[#CCE6FF] text-gray-800 relative">
        <div className="opacity-30 bg-gradient-to-r from-blue-200 via-blue-200 via-blue-300/10 to-indigo-900 absolute top-0 left-0 w-full h-full" />
        <img
          src="/images/bendy9.svg" // Updated image path
          className="absolute bottom-0 -mb-[12%] xs:-mb-[15%] md:-mb-[15%] z-40 left-0 w-full"
          alt="bendy-image"
        />
        <div className="max-w-[1320px] mx-auto relative grid grid-cols-12 overflow-hidden">
          <img
            className="absolute opacity-80 w-full h-full z-10 top-0 right-0 -mt-[20px] cursor-collab sm:-mr-[40%] 2md:-mr-[20%] xl:-mr-[50%] 2xl:-mr-[60%] object-cover"
            src="/images/toolbox-bg-2.svg" // Updated image path
            style={{ zIndex: 1 }}
            alt="toolbox-bg-image"
          />
          <div className="md:col-span-6 pb-10 pt-8 px-7 relative col-span-12 font-inter p-2 flex flex-col">
            <div
              className="pointer-events-auto md:pr-0 md:pb-12 md:pt-6 rounded-3xl z-10"
              style={{ width: "fit-content" }}
            >
              <h1 className="max-w-[50rem] mt-2 mb-5 text-black/90 text-5xl font-semibold tracking-tight xl:text-[48px] lg:leading-tight md:leading-tight">
                <span className="drop-shadow-sm">Welcome to </span>{" "}
                <div className="text-underline inline cursor-collab">
                  <span className="drop-shadow-sm">DiscoverArch</span>
                </div>
              </h1>
              <h2 className="mb-5 text-gray-700 md:leading-[32px] leading-[28px] text-[16px] md:text-[18px] font-inter md:pr-6 max-w-[32rem]">
                Elevate your passion for architecture and design. Join our
                vibrant competitions, engaging webinars, and a community of
                like-minded creatives.
              </h2>
              <div className="flex mt-4 mb-6 sm:mb-0">
                <Link href="/Competition">
                  <button className="confirmBig rounded-full bg-blue px-6 py-4 text-sm font-semibold text-white">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 relative z-20"></div>
          <div className="col-span-5 hidden relative md:block h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

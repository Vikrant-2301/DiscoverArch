"use client";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/Register");
  };

  return (
    <div className="overflow-hidden bg-[#CCE6FF]">
      <div className="w-full max-w-6xl mx-auto pt-32 md:pt-60 flex flex-col grid gap-10 px-5">
        <div className="flex flex-col grid gap-5 lg:flex lg:flex-row lg:gap-1 md:flex md:flex-col">
          <div className="flex flex-col max-w-xl z-2 translate-y-20 md:translate-y-0">
            <h1 className="text-[#0F1F40] max-w-md mb-5 md:max-w-lg font-bold text-4xl md:text-5xl font-inter md:leading-tight">
              ARCHITOPIA: An Architect Abode
            </h1>
            <p className="mb-5 text-[#335f8b] md:leading-[32px] leading-[28px] text-[16px] md:text-[18px] font-inter md:pr-6">
              <span className="font-bold">ARCHITOPIA </span>is more than just a
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
                href="/Architopia Brief.pdf"
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
          <div className="px-3 scale-100 lg:scale-120 translate-y-[70px] md:-translate-y-0">
            <img
              className="w-full lg:translate-x-10 lg:-translate-y-20 lg:scale-100 scale-120 translate-x-20 translate-y-10"
              src="/images/earth-network.svg"
              alt="Earth Network"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

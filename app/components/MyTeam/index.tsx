export const MyTeam = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                width="52"
                height="24"
              />
            </svg>
            {/* <span className="relative">Welcome</span> */}
          </span>{" "}
          Design Enthusiasts & Innovators
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          A Passionate Community of Design Enthusiasts and Innovators Shaping
          the Future of Architecture
        </p>
      </div>
      <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Pratham.jpg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Pratham Garg</p>
            <p className="text-sm text-gray-800">Co-Founder</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Rinku.jpeg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Rinku Pradhan</p>
            <p className="text-sm text-gray-800">Co-Founder</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Vikrant.png"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Vikrant Yadav</p>
            <p className="text-sm text-gray-800">Co-Founder</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Gaurav.jpeg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Gaurav Pal</p>
            <p className="text-sm text-gray-800">Co-Founder</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Raghav.jpg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Raghav Bamral</p>
            <p className="text-sm text-gray-800">Co-Founder</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Mayur.jpeg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Mayur S</p>
            <p className="text-sm text-gray-800">Marketing Head</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Omm.jpeg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Omm Dhal Mahapatra </p>
            <p className="text-sm text-gray-800">Graphic Designer</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Girish.jpg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Girish Kumar</p>
            <p className="text-sm text-gray-800">Graphic Designer</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src="/images/wework/team/Tania.jpg"
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Tania Rajput</p>
            <p className="text-sm text-gray-800">Content Writer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;

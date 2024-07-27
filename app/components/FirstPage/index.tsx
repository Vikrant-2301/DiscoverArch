const people = [
  { img: "/images/1.png" },
  { img: "/images/2.png" },
  { img: "/images/3.png" },
];

const pageOne = () => {
  return (
    <div className="w-full bg-[#CCE6FF] h-auto relative ">
      <div className=" w-full h-auto relative z-10">
        <div className="w-full h-auto   p-2 md:p-10 z-10">
          <div className="w-full max-w-7xl mx-auto px-0 md:px-5 z-10">
            <div className="w-full bg-[#195DE2] h-auto rounded-[32px] px-5 py-10 md:py-16 md:px-10">
              <div className="max-w-6xl mx-auto  flex flex-col gap-5 justify items-center">
                <h2 className="md:text-[50px] text-[30px] text-center max-w-2xl leading-[40px] md:leading-[60px]  font-semibold font-inter text-white">
                  PRIZES WORTH Rs.10000
                </h2>

                <div className="grid grid-cols-3 gap-8 items-center justify-center">
                  {people.map((peep, i) => (
                    <div
                      key={i}
                      className="flex justify-center items-center overflow-hidden lg:w-[120px] lg:h-[120px] w-[100px] h-[100px] rounded-full bg-white bg-opacity-10 border-4 border-white border-opacity-10 cursor-pointer"
                    >
                      {peep?.img && (
                        <img
                          className="relative  flex justify-center hover:scale-125 object-cover h-full rounded-full transition ease-in-out"
                          src={peep?.img}
                          alt={`Person ${i}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <h3 className="text-white/80 max-w-xl text-[18px] font-inter leading-[32px] text-center">
                  10 HONOURABLE MENTIONS <br /> Honourable mentions will get
                  appreciation certificates and will be published on{" "}
                  <span className="font-bold">DiscoverArch </span> website
                </h3>

                <h3 className="text-white/80 max-w-xl text-[18px] font-inter leading-[32px] text-center ">
                  PARTICIPATION CERTIFICATES <br /> To show our appreciation,
                  all the participants would receive a participation
                  certificate.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full ">
        <img
          className="w-full translate-y-[4px] z-0"
          src="/images/tilt-section.svg"
        />
        <div className="w-full h-[100px] md:h-[200px] translate-y-[2px] bg-[#F8B700]"></div>
      </div>
    </div>
  );
};

export default pageOne;

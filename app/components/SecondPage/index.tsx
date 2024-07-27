const Benefits = [
  {
    title: "CHALLENGE",
    description: `Participants are tasked with designing a residential project that serves as the dream home for an architect. This includes the main house, living spaces, bedrooms, and any additional features you envision an architect dream home would possess. You also have the option to choose your idol architect and design a dream house for them. Emphasize creativity, innovation, and attention to detail.`,
  },
  {
    title: "SITE SELECTION",
    description: `Participants should select a suitable site within an urban or suburban context of a maximum area of 1 acre. Accessibility, proximity to public transport hubs, and the potential for urban placemaking should be factored in, ensuring a seamless integration into the community. Crucially, participants should consult local by-laws and building codes.`,
  },
  {
    title: "ARCHITECTURAL AESTHETICS",
    description: `Create a visually stunning and harmonious design that reflects the unique tastes and personality of an architect.`,
  },
  {
    title: "SPATIAL PLANNING",
    description: `Optimize the use of space within the house to provide functional, comfortable, and aesthetically pleasing spaces.`,
  },
  {
    title: "PRESENTATION QUALITY",
    description: `Pay careful attention to the clarity, visual appeal, and storytelling aspect of your sheets.`,
  },
  {
    title: "INNOVATIVE FEATURES",
    description: `Integrate innovative architectural elements and sustainable features, to showcase your creativity.`,
  },
  {
    title: "SUBMISSION",
    description: `1. The project must be submitted using two (2) A1-sized
    sheets, whether in digital or hand-drawn format. <br />
    2. Floor plans should show furniture arrangements.
    <br />
    3. Site plan should show the orientation and connectivity of
    the building.
    <br />
    4. Elevations and sections of the building.
    <br />
    5. Materials and innovative construction techniques.
    <br />
    6. All drawings should be presented at a scale`,
  },
  {
    title: "INNOVATIVE FEATURES",
    description: `Integrate innovative architectural elements and sustainable features, to showcase your creativity.`,
  },
];

const pageTwo = () => {
  return (
    <div className="w-full pb-40 bg-[#F8B700] px-5 ">
      <div className="w-full max-w-6xl mx-auto  ">
        <div className="max-w-3xl pt-20 md:pt-32">
          <h3 className="text-black/70 text-[40px] leading-[50px] md:text-[56px] md:leading-[70px] font-semibold font-inter">
            Design Brief
          </h3>
          {/* <h3 className="text-black/60 text-[24px] leading-[70px] font-semibold font-inter my-3 md:my-5">
            Built in the open for design, code, and tech
          </h3> */}
        </div>
        <div className="flex grid md:grid-cols-2 flex-row flex-wrap gap-7 md:gap-10 my-5">
          {Benefits.map((item, i) => {
            return (
              <div key={i} className="max-w-lg grid flex flex-col grid gap-3">
                <h3 className="font-bold font-inter text-[18px] text-black/70">
                  {item.title}
                </h3>
                <p className="leading-[34px] font-inter font-medium text-[18px] text-black/60">
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default pageTwo;

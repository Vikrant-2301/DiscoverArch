const Content = () => {
  return (
    <div className="overflow-hidden bg-white mt-12 py-12 sm:py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h5 className="mb-4 text-3xl font-extrabold leading-none">
                CHALLENGE
              </h5>
              <p className="mb-6 text-gray-900">
                Participants are tasked with designing a residential project
                that serves as the dream home for an architect. This includes
                the main house, living spaces, bedrooms, and any additional
                features you envision an architect's dream home would possess.
                You also have the option to choose your idol architect and
                design a dream house for them. Emphasize creativity, innovation,
                and attention to detail.
              </p>
              <h5 className="mb-4 text-3xl font-extrabold leading-none">
                SITE SELECTION
              </h5>
              <p className="mb-6 text-gray-900">
                Participants should select a suitable site within an urban or
                suburban context of a maximum area of 1 acre. Accessibility,
                proximity to public transport hubs, and the potential for urban
                placemaking should be factored in, ensuring a seamless
                integration into the community. Crucially, participants should
                consult local by-laws and building codes.
              </p>
              <h5 className="mb-4 text-3xl font-extrabold leading-none">
                JUDGING CRITERIA
              </h5>
              <h5 className="mb-2 text-sm font-extrabold leading-none">
                ARCHITECTURAL AESTHETICS
              </h5>
              <p className="mb-6 text-gray-900">
                Create a visually stunning and harmonious design that reflects
                the unique tastes and personality of an architect.
              </p>
              <h5 className="mb-2 text-sm font-extrabold leading-none">
                SPATIAL PLANNING
              </h5>
              <p className="mb-6 text-gray-900">
                Optimize the use of space within the house to provide
                functional, comfortable, and aesthetically pleasing spaces.
              </p>
              <h5 className="mb-2 text-sm font-extrabold leading-none">
                INNOVATIVE FEATURES
              </h5>
              <p className="mb-6 text-gray-900">
                Integrate innovative architectural elements and sustainable
                features, to showcase your creativity.
              </p>
              <h5 className="mb-2 text-sm font-extrabold leading-none">
                PRESENTATION QUALITY
              </h5>
              <p className="mb-6 text-gray-900">
                Pay careful attention to the clarity, visual appeal, and
                storytelling aspect of your sheets.
              </p>
            </div>
            <div>
              <h1 className="mb-4 text-3xl font-extrabold leading-none text-gray-900 ">
                SUBMISSION
              </h1>
              <p className="mb-2  text-gray-900 ">
                1. The project must be submitted using two (2) A1-sized sheets,
                whether in digital or hand-drawn format. <br /> 2. Floor plans
                should show furniture arrangements. <br /> 3. Site plan should
                show the orientation and connectivity of the building. <br /> 4.
                Elevations and sections of the building. <br /> 5. Materials and
                innovative construction techniques. <br /> 6. All drawings
                should be presented at a scale
              </p>
            </div>
          </div>
          <img
            src="../images/competition/Home.jpeg"
            alt="Home"
            className="hidden sm:block md:hidden lg:block xl:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};
export default Content;

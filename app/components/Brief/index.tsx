import Image from "next/image";

const Brief = () => {
  return (
    <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Image
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/../images/competition/House.jpeg"
            alt="Brief"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:pl-10">
          {" "}
          {/* Change 'lg:pr-10' to 'lg:pl-10' for left padding */}
          <h5 className="mb-4 text-xl font-extrabold leading-none">
            RULES AND REGULATION
          </h5>
          <p className="mb-6 text-gray-900">
            1. English is the designated language for all drawing-related
            communication. <br />
            2. The deadline for submission is January 15, 2024; submissions
            received after this date will not be considered. <br />
            3. The registration fee is non-refundable. <br />
            4. Under no circumstances should participants contact the jury.{" "}
            <br />
            5. All participants are required to adhere to the competition's
            rules and regulations. <br />
            6. Failure to adhere to the rules may result in the disqualification
            of participants. <br />
            7. DISCOVER ARCH retains the right to adjust the competition
            schedule.
          </p>
          <h5 className="mb-4 text-xl font-extrabold leading-none">
            Important Dates:
          </h5>
          <p className="mb-6 text-gray-900">
            Last date for Registration: 10 December, 2023 <br /> Last date for
            Submission: 10 January, 2024
          </p>
          <hr className="mb-5 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Brief;

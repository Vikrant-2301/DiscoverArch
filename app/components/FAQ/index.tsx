"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  const emailAddress = "contact.discoverarch@gmail.com";
  const linkStyle = {
    color: "blue", // Change the color to your desired color
    textDecoration: "none", // Remove the default underline if desired
  };
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-5xl mb-60 py-8 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg "
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked questions.
      </h2>
      <div className="w-full px-4 sm:px-6 pt-6 sm:pt-10 lg:pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl sm:text-lg font-medium">
                  <span>Can I change team members after I register?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Participants are prohibited from swapping or removing any
                  existing team members after registration. To make changes,
                  please send your request to{" "}
                  <a href={`mailto:${emailAddress}`} style={linkStyle}>
                    {emailAddress}
                  </a>{" "}
                  with the details of the new team member requested. Include
                  your team&apos;s unique code in the email.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl sm:text-lg font-medium">
                  <span>What are the modes of submissions?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Participants are requested to submit their work in PDF format.{" "}
                  <br />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-4 px-6">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl sm:text-lg font-medium">
                  <span>
                    What is the limit or cap on the number of team members, and
                    can anyone participate individually?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Each team can have a maximum of four members and cannot exceed
                  this limit. Participants who wish to participate individually
                  can do so by filling out and submitting the details as a team
                  leader.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

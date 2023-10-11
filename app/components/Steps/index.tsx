"use client";
import React, { useState } from "react";

const Steps = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleStepClick = (step: any) => {
    setSelectedStep(step);
  };

  // Define step content
  const stepContent = {
    1: "This is the additional information for Step 1.",
    2: "This is the additional information for Step 2.",
    3: "This is the additional information for Step 3.",
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        {/* Your existing content */}
      </div>

      <div className="mx-auto">
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`cursor-pointer ${
                selectedStep === step ? "bg-blue-200" : "bg-white"
              } p-4 rounded-lg`}
              onClick={() => handleStepClick(step)}
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Step {step}</p>
                {step < 3 && (
                  <svg
                    className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="2"
                      y1="12"
                      x2="22"
                      y2="12"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="15,5 22,12 15,19 "
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          {stepContent[selectedStep] && (
            <div className="bg-blue-200 p-4 rounded-lg">
              <p className="text-gray-600">{stepContent[selectedStep]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Steps;

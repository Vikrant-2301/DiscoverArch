"use client";
import React from "react";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    heading: "FIRST PRIZE WINNER",
    imgSrc: "/images/Winner/W1.png",
  },
  {
    heading: "SECOND PRIZE WINNER",
    imgSrc: "/images/Winner/W2.png",
  },
  {
    heading: "THIRD PRIZE WINNER",
    imgSrc: "/images/Winner/W3.png",
  },
  {
    heading: "SPECIAL MENTIONS",
    imgSrc: "/images/Winner/S1.png",
  },
  {
    heading: "SPECIAL MENTIONS",
    imgSrc: "/images/Winner/S2.png",
  },
  {
    heading: "SPECIAL MENTIONS",
    imgSrc: "/images/Winner/S3.png",
  },
  {
    heading: "SPECIAL MENTIONS",
    imgSrc: "/images/Winner/S4.png",
  },
  {
    heading: "SPECIAL MENTIONS",
    imgSrc: "/images/Winner/S5.png",
  },
  {
    heading: "SPECIAL MENTIONS",
    imgSrc: "/images/Winner/S6.png",
  },
];

export default function GridPhotos() {
  return (
    <div className="bg-bgblue py-20 marginFeature bg-featured">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center pt-48 pb-10 md:pt-96">
          <h3 className="text-4xl sm:text-5xl font-bold text-white mt-28">
            FEATURED WORKS
          </h3>
          <h3 className="text-2xl sm:text-4xl font-bold text-white text-opacity-80 my-2">
            ARCHITOPIA
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {postData.map((item, index) => (
            <div key={index} className="text-center">
              <Image
                src={item.imgSrc}
                alt="Featured work"
                width={400}
                height={400}
                className="rounded-2xl"
              />
              <h4 className="mt-4 text-white text-lg font-semibold">
                {item.heading}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

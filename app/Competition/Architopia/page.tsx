import React from "react";
import FAQ from "../../components/FAQ";
import SecondPage from "../../components/SecondPage";
import { Jury } from "../../components/Jury";
import Content from "../../components/Content";
import Brief from "../../components/Brief";
import Hero from "../../components/Hero";
import FirstPage from "../../components/FirstPage";

export default function page() {
  return (
    <div className="">
      <Hero />
      {/* <Content /> */}
      <FirstPage />
      <SecondPage />
      <Brief />
      {/* <Jury /> */}
      <FAQ />
    </div>
  );
}

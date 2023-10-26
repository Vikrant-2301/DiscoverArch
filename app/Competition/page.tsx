import React from "react";
import FAQ from "../components/FAQ";
import FirstPage from "../components/FirstPage";
import { Jury } from "../components/Jury";
import Content from "../components/Content";
import Brief from "../components/Brief";

export default function page() {
  return (
    <div className="">
      <FirstPage />
      <Content />
      <Brief />
      <Jury />
      <FAQ />
    </div>
  );
}

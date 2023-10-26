import React from "react";
import FAQ from "../components/FAQ";
import Register from "../components/Register";
import FirstPage from "../components/FirstPage";
import { Jury } from "../components/Jury";
import Content from "../components/Content";
import Brief from "../components/Brief";

export default function page() {
  return (
    <div className="my-40 py-20">
      <FirstPage />
      <Content />
      <Brief />
      <Jury />
      <Register />
      <FAQ />
    </div>
  );
}

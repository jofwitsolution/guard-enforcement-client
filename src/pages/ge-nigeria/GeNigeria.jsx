import React from "react";
import {
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./components";
import Meta from "../../components/Meta";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";

const GeNigeria = () => {
  return (
    <div className="bg-secondaryBackground">
      <Meta title={"Guard Enforcement Nigeria - Guard Enforcement"} />
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default GeNigeria;

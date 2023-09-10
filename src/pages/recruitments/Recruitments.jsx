import React from "react";
import { SectionOne, SectionThree, SectionTwo } from "./components";
import Meta from "../../components/Meta";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";

const Recruitments = () => {
  return (
    <>
      <Meta title={"Recruitments - Guard Enforcement"} />
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </>
  );
};

export default Recruitments;

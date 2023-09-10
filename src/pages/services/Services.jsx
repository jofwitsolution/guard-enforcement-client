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

const Services = () => {
  return (
    <>
      <Meta title={"Services - Guard Enforcement"} />
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Services;

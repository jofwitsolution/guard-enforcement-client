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
import Sidebar from "../../components/navigation/Sidebar";

const About = () => {
  return (
    <>
      <Meta title={"Our Company - Guard Enforcement"} />
      <Navbar />
      <Sidebar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};

export default About;

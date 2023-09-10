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
import SectionFive from "./components/SectionFive";
import Sidebar from "../../components/navigation/Sidebar";

const Services = () => {
  return (
    <>
      <Meta title={"Services - Guard Enforcement"} />
      <Navbar />
      <Sidebar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Services;

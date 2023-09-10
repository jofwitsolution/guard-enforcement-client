import React from "react";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
} from "./components";
import Meta from "../../components/Meta";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/navigation/Sidebar";

const Home = () => {
  return (
    <>
      <Meta title={"Guard Enforcement"} />
      <Navbar />
      <Sidebar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionSix />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import WhyRescrap from "./WhyRescrap";
import HowItWorks from "./HowWeWork";
import TowardsEnvironment from "./TowardTheEnvironment";

import About from "./About";
import CharityPlan from "./Charityplan";
import OurServices from "./Services";
import Feedback from "./Feedback";
import Team from "./Team";
import HowItWorkAnimated from "./HowItWorkAnimated";

import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyRescrap />
      <HowItWorks />
      <HowItWorkAnimated />
      <TowardsEnvironment />
      <About />
      <CharityPlan />
      <OurServices />
      <Feedback />
      <Team />
    </div>
  );
};

export default Home;

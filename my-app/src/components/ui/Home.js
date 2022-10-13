import React from "react";

import { Hero } from "../../pages/Home/Hero";
import { Categories } from "../../pages/Home/Categories";
import { Recommended } from "../../pages/Home/Recommended";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recommended />
    </>
  );
};

export default Home;

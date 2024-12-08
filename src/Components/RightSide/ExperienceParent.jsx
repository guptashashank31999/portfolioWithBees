import React from "react";
import Experience1 from "./Experience/Experience1";
import { ExperienceData } from "./Experience/Data";

const ExperienceParent = () => {
  return (
    <>
      {ExperienceData.map((item, index) => {
        return <Experience1 item={item} />;
      })}
    </>
  );
};

export default ExperienceParent;

import React from "react";
import Project1 from "./Projects/Project1";
import { ProjectData } from "./Projects/Data";

const ProjectParent = () => {
  return (
    <>
      {ProjectData.map((item, index) => {
        return <Project1 item={item}/>;
      })}
    </>
  );
};

export default ProjectParent;

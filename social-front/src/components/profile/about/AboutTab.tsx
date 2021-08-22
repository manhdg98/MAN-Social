import React, { Fragment } from "react";
import Content from "./Content";
import Sidebar from "./SideBar";

const AboutTab = () => {
  return (
    <Fragment>
      <Sidebar />
      <Content />
    </Fragment>
  );
};

export default AboutTab;

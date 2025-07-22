import React from "react";
import Cards from "../components/Cards";
import Visitor from "../Data/Visitor";
import VisitorMap from "../components/Visitormap";


const Settings = () => {
  return <div>
    <Cards data={Visitor} />

    <div className="my-5 ">
      < VisitorMap />
    </div>
  </div>;
};

export default Settings;

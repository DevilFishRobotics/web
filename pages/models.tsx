import React from "react";

import dynamic from "next/dynamic";

const DisplayModel = dynamic(
  () => {
    return import("../components/DisplayModel");
  },
  { ssr: false }
);

export default function App() {
  return (
    <div className="">
      <DisplayModel modelName="model.glb" />
      {/*      
      <DisplayModel modelName="central-computing-unit.glb" />
      <DisplayModel modelName="thruster-1.glb" />
      <DisplayModel modelName="thruster-2.glb" />
        */}
    </div>
  );
}

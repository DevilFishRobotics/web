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
    </div>
  );
}

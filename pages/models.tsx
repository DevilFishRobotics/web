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
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
      <DisplayModel modelName="model.glb" />
    </div>
  );
}

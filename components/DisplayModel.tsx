import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

export default function DisplayModel({ modelName }) {
  console.log("/" + modelName);
  return (
    <div>
      <GLTFModel src={"/" + modelName}>
        <AmbientLight color={0xffffff} />
        <DirectionLight color={0xffffff} />
        <DirectionLight color={0xff00ff} />
      </GLTFModel>
    </div>
  );
}

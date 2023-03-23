import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

export default function DisplayModel({ modelName }) {
  return (
    <div className="">
      <GLTFModel height={400} width={400} src={"/" + modelName}>
        <AmbientLight color={0xffffff} />
        <DirectionLight color={0xffffff} />
      </GLTFModel>
    </div>
  );
}

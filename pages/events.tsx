import Image from "next/image";
export default function About() {
  return (
    <div>
      <h1>Events</h1>
      <Image
        alt="Logo of DevilFish Robotics"
        src="/team.jpeg"
        width={600}
        height={399}
      />
      <p className="text-xl font-bold">Coming Soon!</p>
    </div>
  );
}

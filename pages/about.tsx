import Image from "next/image";
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <Image
        alt="Logo of DevilFish Robotics"
        src="/team.jpeg"
        width={600}
        height={399}
      />
      <p>
        Devilfish Robotics offers ASU students year-round opportunities to
        advance their engineering and leadership skills, knowledge, and
        experience through practical hands-on projects and academically rigorous
        programs. We implement problem-solving techniques in designing and
        building robotic systems used in competitions, scientific research,
        community outreach activities, and applications that benefit industrial,
        commercial, and public services. Our members are encouraged to
        participate in team leadership practices, teaching sessions, and
        knowledge-sharing opportunities with fellow students and the community
        while engaging in our continuous learning efforts for a practical
        understanding of science and engineering.
      </p>
    </div>
  );
}

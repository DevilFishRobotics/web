import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="text-center">
          <Link passHref href="/">
            <div className="relative h-48 w-[195px] mx-auto">
              <Image
                alt="Logo of DevilFish Robotics"
                layout="fill"
                objectFit="cover"
                src="/logo.png"
                className="my-0 block"
              />
            </div>
          </Link>
          <h1>DevilFish Robotics</h1>
        </div>
        <h2>Get Involved</h2>
        <p>DevilFish Robotics is asd as dfa da asd asdasdasdasdas asdasdasd.</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-200 font-title text-neutral-900 p-2 rounded-lg font-bold"
            type="submit"
          >
            Join the Discord
          </button>
          <button
            className="bg-blue-200 font-title text-neutral-900 p-2 rounded-lg font-bold"
            type="submit"
          >
            <a href="https://asu.campuslabs.com/engage/organization/devilfish">
              {" "}
              Join on SunDevilSync
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

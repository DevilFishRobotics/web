import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center text-center">
          <div className="mx-auto">
            <Image
              alt="Logo of DevilFish Robotics"
              src="/team1.png"
              width={640}
              height={405}
              className="my-0 block"
            />
          </div>
          <h1>DevilFish Robotics</h1>
          <Socials />
          <div className="justify-center">
            <h2>Join Us</h2>
            <p>
              The best way to join DevilFish Robotics is through the Sun Devil
              Sync link below!
            </p>
            <button
              className="bg-blue-200 font-title text-neutral-900 p-2 rounded-lg font-bold w-fit"
              type="submit"
            >
              <a
                href="https://asu.campuslabs.com/engage/organization/devilfish"
                target="_blank"
              >
                {" "}
                Join on SunDevilSync
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

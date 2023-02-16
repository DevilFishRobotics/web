import Image from "next/image";
import NavLink from "./NavLink";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="mx-5 py-5 flex justify-between items-center text-sm font-bold border-b-[0.5px] border-neutral-400 mb-10">
      <Link passHref href="/">
        <div className="relative h-10 w-[114px]">
          <Image
            alt="Logo of DevilFish Robotics"
            layout="fill"
            objectFit="cover"
            src="/logo.png"
          />
        </div>
      </Link>
      <div className="flex justify-between space-x-16">
        <NavLink href="/" name="HOME" />
        <NavLink href="/b" name="EVENTS" />
        <NavLink href="/c" name="ABOUT" />
      </div>
      <div className="text-yellow-600 flex items-center space-x-2">
        <NavLink href="/contact" name="CONTACT US" />
        <div className="rounded-full bg-yellow-600 p-2 w-9">
          <EnvelopeIcon className="h-5 w-5 text-white mx-auto" />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import NavLink from "./NavLink";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

export default function Nav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="mx-5 sticky top-0 z-50 bg-orange-50 py-5 md:flex justify-between items-center text-sm font-bold border-b-[0.5px] border-neutral-400 mb-10">
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
      <div className="p-7 fixed top-0 z-50 right-0 md:hidden">
        {open ? (
          <XMarkIcon onClick={() => setOpen(false)} className="h-6 w-6" />
        ) : (
          <Bars3Icon onClick={() => setOpen(true)} className="h-6 w-6" />
        )}
      </div>
      <div className={`${open ? "" : "md:block hidden"} `}>
        <div
          onClick={() => setOpen(false)}
          className="flex justify-between items-center mt-5 md:mt-0 space-x-6 md:space-x-16 text-xs xs:text-sm"
        >
          <NavLink href="/" name="HOME" />
          <NavLink href="/events" name="EVENTS" />
          <NavLink href="/about" name="ABOUT" />
          <div className="text-yellow-600 flex items-center space-x-2">
            <NavLink href="/contact" name="CONTACT US" />
            <div className="rounded-full bg-yellow-600 p-2 w-9 hidden sm:block">
              <EnvelopeIcon className="h-5 w-5 text-white mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

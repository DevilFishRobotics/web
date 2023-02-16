import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href, name }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link passHref href={href}>
      <div
        title={name}
        className={`${
          isActive ? "underline underline-offset-4" : ""
        } navLink flex items-center cursor-pointer hover:underline underline-offset-4`}
      >
        <p className="block">{name}</p>
      </div>
    </Link>
  );
}

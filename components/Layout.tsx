import { useState } from "react";
import Nav from "./Nav";

export default function Layout({ children, ...pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <div className="mx-auto max-w-[900px] px-5 prose mb-10">{children}</div>
    </>
  );
}

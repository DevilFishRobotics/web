import Nav from "./Nav";
export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-[900px] px-5 prose">{children}</div>
    </>
  );
}

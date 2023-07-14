import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      {router.pathname.includes("login") ? <></> : <Header />}

      <Component {...pageProps} />
    </>
  );
}

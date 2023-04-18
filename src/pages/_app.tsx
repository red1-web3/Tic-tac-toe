import "@/styles/globals.css";
import { cxm } from "@/utils";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cxm(inter.variable)}>
      <Component {...pageProps} />
    </main>
  );
}

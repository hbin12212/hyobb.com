import "@/styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={notoSans.className}>
            <Head>
                <title>Hyobin</title>
                <meta name="description" content="hyobin page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

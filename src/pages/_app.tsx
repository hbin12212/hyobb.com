import '@/styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';

const notoSans = Noto_Sans_KR({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={notoSans.className}>
            <Head>
                <title>Hyobin</title>
                <meta
                    name="keywords"
                    content="자바스크립트, Javascript, 효빈 Javascript, hyobin 자바스크립트, 효빈 자바스크립트, 자바스크립트 강의, hbin12212, hyobb, hyobin, 효빈, 인프런 자바스크립트, 웹 프론트엔드를 위한 자바스크립트 첫 걸음, 자바스크립트 입문, 자바스크립트 입문 강의"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/imgs/hyobin.png" />
                <meta name="description" content="hyobin page" />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

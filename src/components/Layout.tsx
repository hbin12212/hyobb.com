import { Noto_Sans_KR } from 'next/font/google';
import { ReactElement } from 'react';
import styles from '@/styles/Layout.module.scss';

const notoSans = Noto_Sans_KR({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

export default function Layout(props: { children: ReactElement | ReactElement[] }) {
    return (
        <div className={notoSans.className}>
            <div className={styles.Layout}>
                <div className={styles.header}></div>
                <main className={styles.main}>
                    <div></div>
                    {props.children}
                    <div></div>
                </main>
                <footer></footer>
            </div>
        </div>
    );
}

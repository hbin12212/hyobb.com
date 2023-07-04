import { Noto_Sans_KR } from 'next/font/google';
import { ReactElement } from 'react';
import Header from './Header';
import styles from '@/styles/Layout.module.scss';

const notoSans = Noto_Sans_KR({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

export default function Layout(props: { children: ReactElement | ReactElement[] }) {
    return (
        <div className={notoSans.className}>
            <div className={styles.Layout}>
                <div className={styles.header}>
                    <Header></Header>
                </div>
                <main className={styles.main}>
                    <div>{props.children}</div>
                </main>
                <footer></footer>
            </div>
        </div>
    );
}

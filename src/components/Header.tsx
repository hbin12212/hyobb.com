import styles from '../styles/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const nowRouter = router.pathname.split('/')[1];
    return (
        <div className={styles.Header}>
            <div className={styles.main}>
                <div className={styles.home}>
                    <Link href="/">HYOBIN</Link>
                </div>
                <div className={styles.menu}>
                    <div className={nowRouter === 'events' ? styles.events_cliked : styles.events}>
                        <Link href="/events">Events</Link>
                    </div>
                    <div className={nowRouter === 'news' ? styles.news_clicked : styles.news}>
                        <Link href="/news">News</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

import styles from '../styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.main}>
                <div className={styles.home}>
                    <Link href="/">HYOBIN</Link>
                </div>
                <div className={styles.menu}>
                    <div className={styles.events}>
                        <Link href="/events">Events</Link>
                    </div>
                    <div className={styles.experiences}>
                        <Link href="/experiences">Experiences</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

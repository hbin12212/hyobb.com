import styles from '@/styles/Home.module.scss';
import Profile from '../components/Profile';
import NewEvent from '../components/NewEvent';

export default function Home() {
    return (
        <div className={styles.Home}>
            <Profile></Profile>
            <div className={styles.line}></div>
            <div className={styles.label}>Latest Event.</div>
            <NewEvent></NewEvent>
            <div className={styles.line}></div>
        </div>
    );
}

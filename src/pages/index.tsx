import styles from '@/styles/Home.module.scss';
import Profile from '../components/Profile';

export default function Home() {
    return (
        <div className={styles.Home}>
            <Profile></Profile>
        </div>
    );
}

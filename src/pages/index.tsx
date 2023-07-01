import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Profile from '../components/Profile';

export default function Home() {
    return (
        <div className={styles.Home}>
            <div className={styles.header}></div>
            <Profile></Profile>
        </div>
    );
}

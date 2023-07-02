import Image from 'next/image';
import styles from '@/styles/Events.module.scss';
import eventData from '../../data/event';
import EventItem from '@/components/atoms/EventItem';

export default function Event() {
    return (
        <div className={styles.Event}>
            <EventItem eventData={eventData}></EventItem>
        </div>
    );
}

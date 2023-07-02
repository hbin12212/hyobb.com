import Image from 'next/image';
import eventData from '@/data/event';
import styles from '../styles/NewEvent.module.scss';
import EventItem from './atoms/EventItem';

export default function NewEvent() {
    const newEvent = [eventData[0]];
    return (
        <div className={styles.NewEvent}>
            <EventItem eventData={newEvent}></EventItem>
        </div>
    );
}

import Image from 'next/image';
import styles from '@/styles/Events.module.scss';
import eventData from '../../data/event';

export default function Event() {
    return (
        <div className={styles.Event}>
            {eventData.map((event) => (
                <a key={event.startedDate} href={event.url} target="_blank">
                    <div className={styles.event_item}>
                        <div className={styles.thumbnail}>
                            <Image
                                alt={`event-thumbnail-${event.startedDate}`}
                                src={event.thumbnail}
                                width={180}
                                height={120}
                            ></Image>
                        </div>
                        <div className={styles.event_info}>
                            <div className={styles.title}>{event.title}</div>
                            <div className={styles.description}>{event.description}</div>
                            <div className={styles.tags}>
                                {event.status === false ? (
                                    <div className={styles.status_end}>종료</div>
                                ) : (
                                    <div className={styles.status_progress}>진행중</div>
                                )}
                                <div className={styles.discount_rate}>{event.discountRate}% 할인</div>
                            </div>
                            <div className={styles.date}>{event.startedDate}</div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

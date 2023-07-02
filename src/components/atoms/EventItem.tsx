import Image from 'next/image';
import styles from '../../styles/EventItem.module.scss';

export default function EventItem({ eventData }: any) {
    return (
        <div className={styles.EventItem}>
            {eventData.map((event: any) => (
                <a key={event.startedDate} href={event.url} target="_blank">
                    <div className={styles.event_item}>
                        <div className={styles.thumbnail_pc}>
                            <Image
                                alt={`event-thumbnail-${event.startedDate}`}
                                src={event.thumbnail}
                                width={180}
                                height={120}
                            ></Image>
                        </div>
                        <div className={styles.thumbnail_mb}>
                            <Image
                                alt={`event-thumbnail-${event.startedDate}`}
                                src={event.thumbnail}
                                width={400}
                                height={250}
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

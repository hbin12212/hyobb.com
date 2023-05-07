import Image from "next/image";
import styles from "@/styles/Home.module.scss";

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.header}></div>
            <div className={styles.main}>
                <div></div>
                <div>
                    <div className={styles.about}>
                        <div className={styles.intro}>HYOBIN | FrontEnd Developer</div>
                        <div className={styles.profile}>
                            <div className={styles.profile_img}>
                                <Image src="/imgs/hyobin.png" width={220} height={220} alt="hyobin"></Image>
                            </div>
                            <div className={styles.profile_info}>
                                <div className={styles.contact}>
                                    <div className={styles.contact_title}>Contact.</div>
                                    <div className={styles.profile_item}>
                                        <div className={styles.label}>Email.</div>
                                        <div className={styles.content}>
                                            <a href="mailto:hbin12212@gmail.com">hbin12212@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className={styles.profile_item}>
                                        <div className={styles.label}>LinkedIn.</div>
                                        <div className={styles.content}>
                                            <a href="https://www.linkedin.com/in/효빈-김-6003b1195/" target="_blank">
                                                https://www.linkedin.com/in/효빈-김-6003b1195/
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.channel}>
                                    <div className={styles.channel_title}>Channel.</div>
                                    <div className={styles.profile_item}>
                                        <div className={styles.label}>Twitter.</div>
                                        <div className={styles.content}>
                                            <a href="https://twitter.com/hyob1221" target="_blank">
                                                https://twitter.com/hyob1221
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.profile_item}>
                                        <div className={styles.label}>Inflearn.</div>
                                        <div className={styles.content}>
                                            <a href="https://www.inflearn.com/" target="_blank">
                                                https://www.inflearn.com/
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.profile_item}>
                                        <div className={styles.label}>GitHub.</div>
                                        <div className={styles.content}>
                                            <a href="https://github.com/hbin12212" target="_blank">
                                                https://github.com/hbin12212
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.profile_item}>
                                        <div className={styles.label}>GitBook.</div>
                                        <div className={styles.content}>
                                            <a href="https://github.com/hbin12212" target="_blank">
                                                https://github.com/hbin12212
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Home;

import styles from "@/styles/Profile.module.scss";
import Image from "next/image";

const Profile = () => {
    return (
        <div className={styles.Profile}>
            <div></div>
            <div>
                <div className={styles.about}>
                    <div className={styles.intro}>HYOBIN | FrontEnd Developer</div>
                    <div className={styles.profile}>
                        <div className={styles.profile_img_pc}>
                            <Image src="/imgs/hyobin.png" width={220} height={220} alt="hyobin_pc"></Image>
                        </div>
                        <div className={styles.profile_img_mb}>
                            <Image src="/imgs/hyobin.png" width={180} height={180} alt="hyobin_mb"></Image>
                        </div>
                        <div className={styles.profile_info}>
                            <div className={styles.contact_pc}>
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
                            <div className={styles.channel_pc}>
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
                                        <a href="https://inf.run/arGF" target="_blank">
                                            https://inf.run/arGF
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
                                    <div className={styles.label}>Javascript.</div>
                                    <div className={styles.content}>
                                        <a href="https://one-step-js.hyobb.com/?utm_source=profile" target="_blank">
                                            https://one-step-js.hyobb.com/
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contact_title_mb}>Contact & Channel.</div>
                            <div className={styles.contact_mb}>
                                <div className={styles.profile_item}>
                                    <div className={styles.content}>
                                        <a href="mailto:hbin12212@gmail.com">Email</a>
                                    </div>
                                </div>
                                <div className={styles.profile_item}>
                                    <div className={styles.content}>
                                        <a href="https://www.linkedin.com/in/효빈-김-6003b1195/" target="_blank">
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.profile_item}>
                                    <div className={styles.content}>
                                        <a href="https://twitter.com/hyob1221" target="_blank">
                                            Twitter
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.channel_mb}>
                                <div className={styles.profile_item}>
                                    <div className={styles.content}>
                                        <a href="https://inf.run/arGF" target="_blank">
                                            Inflearn
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.profile_item}>
                                    <div className={styles.content}>
                                        <a href="https://github.com/hbin12212" target="_blank">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.profile_item}>
                                    <div className={styles.content}>
                                        <a href="https://one-step-js.hyobb.com/?utm_source=profile" target="_blank">
                                            Javascript
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
    );
};

export default Profile;

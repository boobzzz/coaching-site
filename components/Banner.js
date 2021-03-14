import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import styles from '../styles/Banner.module.css'

const prefix = '/coaching-site'

export const Banner = () => (
    <section>
        <div id="main" className={styles.container}>
            <div className={styles.motto}>
                <span></span>
                <h2>
                    “Следуй зову сердца,<br/>
                    опираясь на внутреннюю силу”
                </h2>
            </div>
            <div className={styles.img}>
                <img src={`${prefix}/images/banner-img.png`} alt=""/>
            </div>
            <div className={styles.socials}>
                <a href="https://www.facebook.com/" className={styles.icon}>
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/" className={styles.icon}>
                    <FaInstagramSquare />
                </a>
            </div>
        </div>
    </section>
)
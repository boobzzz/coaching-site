import Image from 'next/image'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import styles from '../styles/Banner.module.css'

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
            <div className={styles.image}>
                <Image
                    src="/images/banner-img.png"
                    width={510}
                    height={750}
                    quality={100} />
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
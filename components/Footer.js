import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import styles from '../styles/Footer.module.css';

export const Footer = () => (
    <footer>
        <div className="content">
            <div className={styles.container}>
                <a href="https://www.facebook.com/" className={styles.icon}>
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/" className={styles.icon}>
                    <FaInstagramSquare />
                </a>
            </div>
        </div>
    </footer>
)
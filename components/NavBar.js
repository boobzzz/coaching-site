import Link from 'next/link'

import styles from '../styles/NavBar.module.css'

export const NavBar = () => (
    <nav>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <Link href=""><a data-hover="Обо мне">Обо мне</a></Link>
            </li>
            <li className={styles.navItem}>
                <Link href=""><a data-hover="Проекты">Проекты</a></Link>
            </li>
            <li className={styles.navItem}>
                <Link href=""><a data-hover="Формат">Формат</a></Link>
            </li>
            <li className={styles.navItem}>
                <Link href=""><a data-hover="Отзывы">Отзывы</a></Link>
            </li>
            <li className={styles.navItem}>
                <Link href=""><a data-hover="Контакты">Контакты</a></Link>
            </li>
        </ul>
    </nav>
)
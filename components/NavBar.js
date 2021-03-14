import Link from 'next/link'

import styles from '../styles/NavBar.module.css'

export const NavBar = ({ scrolled }) => {
    const listStyle = scrolled ? `${styles.navList} ${styles.scrolled}` : `${styles.navList}`

    return (
        <nav className={styles.nav}>
            <ul className={listStyle}>
                <li className={styles.navItem}>
                    <Link href="/#main"><a data-hover="Главная">Главная</a></Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/#about"><a data-hover="Обо мне">Обо мне</a></Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/#projects"><a data-hover="Проекты">Проекты</a></Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/#format"><a data-hover="Формат">Формат</a></Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/#feedback"><a data-hover="Отзывы">Отзывы</a></Link>
                </li>
                <li className={styles.navItem}>
                    <Link href=""><a data-hover="Контакты">Контакты</a></Link>
                </li>
            </ul>
        </nav>
    )
}
import Link from 'next/link'

import { NavBar } from './NavBar'
import { useScroll } from '../hooks/useScroll'
import styles from '../styles/HeaderMain.module.css'

const prefix = '/coaching-site'

export const Header = () => {
    const { scrolled } = useScroll()
    const headerClass = scrolled ? `${styles.container} ${styles.scrolled}` : styles.container
    const logoClass = scrolled ? `${styles.logo} ${styles.small}` : `${styles.logo} ${styles.big}`

    return (
        <header>
            <div className={headerClass}>
                <Link href="/#main">
                    <a className={logoClass}>
                        <img
                            src={`${prefix}/images/logo.svg`}
                            className={styles.img}/>
                    </a>
                </Link>
                <NavBar scrolled={scrolled} />
            </div>
        </header>
    )
}
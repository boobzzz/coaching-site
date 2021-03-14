import Image from 'next/image'

import { NavBar } from './NavBar'
import { useScroll } from '../hooks/useScroll'
import styles from '../styles/HeaderMain.module.css'

export const Header = () => {
    const { scrolled } = useScroll()
    const headerClass = scrolled ? `${styles.container} ${styles.scrolled}` : styles.container

    return (
        <header>
            <div className={headerClass}>
                <Image
                    src="/images/logo.svg"
                    width={scrolled ? 132 : 264}
                    height={scrolled ? 50 : 100} />
                <NavBar scrolled={scrolled} />
            </div>
        </header>
    )
}
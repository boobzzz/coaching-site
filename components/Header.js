import Image from 'next/image'

import { NavBar } from './NavBar'
import styles from '../styles/HeaderMain.module.css'

export const Header = () => (
    <header>
        <div className="content">
            <div className={styles.container}>
                <Image
                    src="/images/logo.svg"
                    width={264}
                    height={100} />
                <NavBar />
            </div>
        </div>
    </header>
)
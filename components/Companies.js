import Image from 'next/image'

import styles from '../styles/Companies.module.css'

const companies = [
    { id: 'cmp01', img: '/images/spacex.svg' },
    { id: 'cmp02', img: '/images/tesla.svg' },
    { id: 'cmp03', img: '/images/neuralink.svg' },
    { id: 'cmp04', img: '/images/netflix.svg' },
    { id: 'cmp05', img: '/images/google.svg' },
    { id: 'cmp06', img: '/images/nasa.svg' },
    { id: 'cmp07', img: '/images/apple.svg' }
]

export const Companies = () => (
    <section className={styles.section}>
        <div className="content">
            <ul className={styles.container}>
                {companies.map(comp =>
                    <li key={comp.id}>
                        <Image
                            src={comp.img}
                            width={100}
                            height={50} />
                    </li>    
                )}
            </ul>
        </div>
    </section>
)
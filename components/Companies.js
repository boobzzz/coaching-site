// import Image from 'next/image'

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
    <section>
        <ul className={styles.container}>
            {companies.map(comp =>
                <li key={comp.id} className={styles.brand}>
                    {/* <Image
                        src={comp.img}
                        width={140}
                        height={60} /> */}
                    <img src={comp.img} alt=""/>
                </li>    
            )}
        </ul>
    </section>
)
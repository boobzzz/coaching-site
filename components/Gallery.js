import styles from '../styles/Gallery.module.css'

const gallery = [
    { id: 'gal01', url: '/images/gallery-1.jpg' },
    { id: 'gal02', url: '/images/gallery-2.jpg' },
    { id: 'gal03', url: '/images/gallery-3.jpg' },
    { id: 'gal04', url: '/images/gallery-4.jpg' },
    { id: 'gal05', url: '/images/gallery-5.jpg' },
    { id: 'gal06', url: '/images/gallery-6.jpg' },
    { id: 'gal07', url: '/images/gallery-7.jpg' },
    { id: 'gal08', url: '/images/gallery-8.jpg' },
]

export const Gallery = () => (
    <section>
        <div className={styles.container}>
            {gallery.map(img =>
                <div key={img.id} className={styles.img}>
                    <img src={img.url} alt=""/>
                </div>
            )}
        </div>
    </section>
)
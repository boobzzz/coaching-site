import { SectionHeader } from './UI/SectionHeader'
import styles from '../styles/Format.module.css'

export const Format = () => (
    <section>
        <div id="format" className={styles.container}>
            <SectionHeader title="Формат" position="right" />
        </div>
    </section>
)
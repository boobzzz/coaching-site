import styles from '../../styles/SectionHeader.module.css'

export const SectionHeader = ({ title, position }) => (
    <div
        style={{ [position]: 0 }}
        className={styles.container}>
        <h2>{title}</h2>
    </div>
)
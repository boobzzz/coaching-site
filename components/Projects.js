import { SectionHeader } from './UI/SectionHeader'
import styles from '../styles/Projects.module.css'

export const Projects = () => (
    <section>
        <div id="projects" className={styles.container}>
            <SectionHeader title="Проекты" position="left" />
        </div>
    </section>
)
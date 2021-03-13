import Image from 'next/image'

import { SectionHeader } from './UI/SectionHeader'
import styles from '../styles/About.module.css'

export const About = () => (
	<section className={styles.section}>
		<div className={styles.container}>
			<div className={styles.img}>
				<Image
					src="/images/about-img.png"
					layout="responsive"
					width={680}
					height={680}
					quality={100} />
			</div>
			<div className={styles.desc}>
				<SectionHeader title="Обо мне" position="right" />
				<div className={styles.descText}>
					<p>
						Лилия Луць - организационный консультант, бизнес тренер,
						трансформационный коуч, НЛП Мастер, член Международной
						Федерации Коучинга (ICF) Автор и тренер программ для
						команд и руководителей разных уровней по развитию
						ключевых навыков. В прошлом HR Business Partner и
						руководитель административного отдела. Более 17 лет
						работала в международных компаниях, таких как Samsung
						Electronics, Coca-Cola, SC Johnson, Shell, GlobalLogic.
						В своей работе сочетает современные достижения и модели
						мероприятия, в частности Спиральную Динамику,
						интегральный подход, Leadership Development Framework
						(LDF), НЛП, коучинг и другие, а также духовные практики
						и философию востока.
					</p>
				</div>
			</div>
		</div>
	</section>
)

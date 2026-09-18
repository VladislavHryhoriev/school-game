import { useTranslation } from 'next-i18next';
import s from './Features.module.scss';

const keys = ['art', 'story', 'rpg'];

const Features = () => {
	const { t } = useTranslation('common');

	return (
		<section className={s.features}>
			<div className='container'>
				<div className={s.heading}>
					<p className={s.eyebrow}>{t('home.features-eyebrow')}</p>
					<h2 className={s.title}>{t('home.features-title')}</h2>
				</div>
				<ul className={s.grid}>
					{keys.map((key, index) => (
						<li className={s.card} key={key}>
							<span className={s.index}>0{index + 1}</span>
							<h3 className={s.cardTitle}>
								{t(`home.features.${key}.title`)}
							</h3>
							<p className={s.cardText}>{t(`home.features.${key}.text`)}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Features;

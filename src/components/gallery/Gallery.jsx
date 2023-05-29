import Carousel from './Carousel';
import s from './Gallery.module.scss';
import { useTranslation } from 'next-i18next';

const Gallery = () => {
	const { t } = useTranslation('common');

	return (
		<section className={s.gallery}>
			<div className='container'>
				<div className={s.inner}>
					<h2 className={s.title}>{t('gallery-overview')}</h2>
					<Carousel />
				</div>
			</div>
		</section>
	);
};

export default Gallery;

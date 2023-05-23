import Carousel from './Carousel';
import s from './Gallery.module.scss';

const Gallery = () => {
	return (
		<section className={s.gallery}>
			<div className='container'>
				<div className={s.inner}>
					<h2 className={s.title}>Обзор</h2>
					<Carousel />
				</div>
			</div>
		</section>
	);
};

export default Gallery;

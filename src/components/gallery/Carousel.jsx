import Image from 'next/image';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './Carousel.module.scss';

const images = [
	'/assets/carousel/slide-1.webp',
	'/assets/carousel/slide-2.webp',
	'/assets/carousel/slide-3.webp',
	'/assets/carousel/slide-4.webp',
	'/assets/carousel/slide-5.webp',
	'/assets/carousel/slide-6.webp',
	'/assets/carousel/slide-7.webp',
	'/assets/carousel/slide-8.webp',
	'/assets/carousel/slide-9.webp',
];

const Carousel = () => {
	return (
		<div className={s.carousel}>
			<Swiper
				modules={[Keyboard, Pagination, Navigation, Autoplay]}
				slidesPerView={1}
				spaceBetween={30}
				navigation={true}
				autoHeight={true}
				loop={true}
				pagination={{ clickable: true }}
				keyboard={{ enabled: true }}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}>
				{images.map((link) => (
					<SwiperSlide key={link}>
						<Image
							className='slide'
							src={link}
							width={1280}
							height={720}
							alt='slide'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;

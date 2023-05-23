import Image from 'next/image';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './Carousel.module.scss';

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
				<SwiperSlide>
					<Image
						className='slide'
						src={'/assets/carousel/slide-1.webp'}
						width={1920}
						height={1080}
						alt='slide'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className='slide'
						src={'/assets/carousel/slide-2.webp'}
						width={1920}
						height={1080}
						alt='slide'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className='slide'
						src={'/assets/carousel/slide-3.webp'}
						width={1920}
						height={1080}
						alt='slide'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className='slide'
						src={'/assets/carousel/slide-4.webp'}
						width={1920}
						height={1080}
						alt='slide'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className='slide'
						src={'/assets/carousel/slide-5.webp'}
						width={1920}
						height={1080}
						alt='slide'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Carousel;

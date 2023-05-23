import Image from 'next/image';
import s from './Images.module.scss';

const Images = ({ isPremium, setIsPremium }) => {
	const url = isPremium ? '/assets/[imgPremium].webp' : '/assets/[imgFree].webp';

	return (
		<div className={s.images}>
			<Image className={s.image} src={url} width={300} height={200} alt='image' />
			<Image className={s.image} src={url} width={300} height={200} alt='image' />
			<Image className={s.image} src={url} width={300} height={200} alt='image' />
		</div>
	);
};

export default Images;

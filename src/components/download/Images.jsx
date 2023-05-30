import Image from 'next/image';
import s from './Images.module.scss';
import { v4 } from 'uuid';

const Images = ({ images }) => {
	return (
		<div className={s.images}>
			{images.map((url) => (
				<Image
					key={v4()}
					className={s.image}
					src={url}
					width={300}
					height={168.75}
					priority
					alt='image'
				/>
			))}
		</div>
	);
};

export default Images;

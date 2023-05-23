import Image from 'next/image';
import s from './Link.module.scss';

const Link = ({ url, imageUrl, alt }) => {
	return (
		<li>
			<a href={url} className={s.link}>
				<Image src={imageUrl} width={40} height={40} alt={alt} />
			</a>
		</li>
	);
};

export default Link;

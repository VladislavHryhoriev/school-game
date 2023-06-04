import Image from 'next/image';
import s from './Link.module.scss';

const Link = ({ url, imageUrl, alt }) => {
	return (
		<li className={s.linkWrapper}>
			<a href={url} className={s.link} target='_blank' rel='nofollow'>
				<Image className={s.image} src={imageUrl} width={20} height={20} alt={alt} />
			</a>
		</li>
	);
};

export default Link;

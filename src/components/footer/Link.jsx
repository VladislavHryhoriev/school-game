import Image from 'next/image';
import s from './Link.module.scss';

const Link = ({ link, imageUrl }) => {
	return (
		<li>
			<a href={link} className={s.link} target='_blank' rel='nofollow'>
				<Image className={s.icon} src={imageUrl} width={40} height={40} alt='icon' />
			</a>
		</li>
	);
};

export default Link;

import Image from 'next/image';
import s from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={s.logo}>
			<Image
				className={s.image}
				src={'/assets/discord-logo.svg'}
				width={100}
				height={50}
				alt='discord-logo'
				priority
			/>
		</div>
	);
};

export default Logo;

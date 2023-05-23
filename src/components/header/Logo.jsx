import Image from 'next/image';
import s from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={s.logo}>
			<Image className={s.image} src='/assets/logo.png' width={140} height={100} alt='logo' />
		</div>
	);
};

export default Logo;

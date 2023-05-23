import Image from 'next/image';
import s from './LogoBox.module.scss';

const LogoBox = () => {
	return (
		<div className={s.logoBox}>
			<Image className={s.bottomLogo} src={'/assets/sc-logo.png'} fill alt='bottomLogo' />
		</div>
	);
};

export default LogoBox;

import Image from 'next/image';
import s from './Description.module.scss';
import LogoBox from './LogoBox';
import TextBox from './TextBox';
import { useTranslation } from 'next-i18next';

const Description = () => {
	const { t } = useTranslation('common');

	return (
		<div className={s.description}>
			<div className={s.imageBox}>
				<Image className={s.image} src={'/assets/logo.png'} width={150} height={100} alt='logo' />
			</div>
			<h1 className={s.title}>{t('home.title')}</h1>
			<TextBox />
			<LogoBox />
		</div>
	);
};

export default Description;

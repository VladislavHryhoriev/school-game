import { PageNameContext } from '@/context/pageNameContext';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import BurgerButton from './BurgerButton';
import s from './BurgerNavigation.module.scss';
import Navigation from './Navigation';

const BurgerNavigation = ({
	handleChangeLanguage,
	setIsOpenBurger,
	isOpenBurger,
}) => {
	const { currentPageName, setCurrentPageName } = useContext(PageNameContext);

	const { t } = useTranslation('common');
	const title = currentPageName || t('header.home');

	return (
		<>
			<Link
				className={s.logoBox}
				href={'/'}
				onClick={() => setCurrentPageName(t('header.home'))}>
				<Image
					className={s.mobileLogo}
					src={'/favicon.ico'}
					width={40}
					height={40}
					alt='little-logo'
				/>
			</Link>
			<h2 className={`${s.currentPage} ${s.showBurger}`}>{title}</h2>
			<BurgerButton isActive={isOpenBurger} setIsActive={setIsOpenBurger} />
			<Navigation
				isOpen={isOpenBurger}
				device={'mobile'}
				handleChangeLanguage={handleChangeLanguage}
			/>
		</>
	);
};

export default BurgerNavigation;

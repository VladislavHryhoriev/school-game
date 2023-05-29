import { PageNameContext } from '@/context/pageNameContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';
import s from './Header.module.scss';
import Logo from './Logo';
import Navigation from './Navigation';
import { useRouter } from 'next/router';

const Header = () => {
	const [isActiveBurger, setIsActiveBurger] = useState(false);
	const [currentPageName, setCurrentPageName] = useState('');
	const { locale } = useRouter();

	// get page name from MenuLink.jsx
	const getPageName = (pageName) => {
		setCurrentPageName(pageName);
		setIsActiveBurger(!isActiveBurger);
	};

	const title = currentPageName || (locale === 'en' ? 'Home' : 'Главная');

	return (
		<PageNameContext.Provider value={getPageName}>
			<header className={s.header}>
				<div className={s.inner}>
					<Logo />
					<Navigation />
					<Link className={s.logoBox} href={'/'}>
						<Image
							className={s.mobileLogo}
							src={'/favicon.ico'}
							width={40}
							height={40}
							alt='little-logo'
						/>
					</Link>
					<h2 className={`${s.currentPage} ${s.showBurger}`}>{title}</h2>
					<BurgerButton isActive={isActiveBurger} setIsActive={setIsActiveBurger} />
					<BurgerMenu isActive={isActiveBurger} />
				</div>
			</header>
		</PageNameContext.Provider>
	);
};

export default Header;

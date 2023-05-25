import { PageNameContext } from '@/context/pageNameContext';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import BurgerMenu from './BurgerMenu';
import s from './Header.module.scss';
import Logo from './Logo';
import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	const [language, setLanguage] = useState(false);
	const [isActiveBurger, setIsActiveBurger] = useState(false);
	const [currentPageName, setCurrentPageName] = useState('');
	const lang = language ? 'En' : 'Ru';

	// get page name from MenuLink.jsx
	const getPageName = (pageName) => {
		setCurrentPageName(pageName);
		setIsActiveBurger(!isActiveBurger);
	};

	return (
		<PageNameContext.Provider value={getPageName}>
			<header className={s.header}>
				<div className={s.inner}>
					<Logo />
					<Navigation lang={lang} setLanguage={setLanguage} language={language} />

					<Link className={s.logoBox} href={'/'}>
						<Image
							className={s.mobileLogo}
							src={'/favicon.ico'}
							width={40}
							height={40}
							alt='little-logo'
						/>
					</Link>
					<h2 className={`${s.currentPage} ${s.showBurger}`}>{currentPageName || 'Главная'}</h2>
					<BurgerButton isActive={isActiveBurger} setIsActive={setIsActiveBurger} />
					<BurgerMenu
						lang={lang}
						language={language}
						setLanguage={setLanguage}
						isActive={isActiveBurger}
					/>
				</div>
			</header>
		</PageNameContext.Provider>
	);
};

export default Header;

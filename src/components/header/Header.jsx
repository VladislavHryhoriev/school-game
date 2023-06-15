import { PageNameContext } from '@/context/pageNameContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import s from './Header.module.scss';
import Logo from './Logo';
import Navigation from './Navigation';
import BurgerNavigation from './BurgerNavigation';

const Header = () => {
	const [isOpenBurger, setIsOpenBurger] = useState(false);
	const [currentPageName, setCurrentPageName] = useState('');
	const { push, asPath } = useRouter();

	// get page name from MenuLink.jsx
	const getPageName = (pageName) => {
		setCurrentPageName(pageName);
		setIsOpenBurger(!isOpenBurger);
	};

	const handleChangeLanguage = (e) => {
		const locale = e.target.value;
		push(asPath, asPath, { locale });
	};

	return (
		<PageNameContext.Provider
			value={{ getPageName, currentPageName, setCurrentPageName }}>
			<header className={s.header}>
				<div className={s.inner}>
					<Logo />
					<Navigation
						isOpen={isOpenBurger}
						device={'desktop'}
						handleChangeLanguage={handleChangeLanguage}
					/>
					<BurgerNavigation
						handleChangeLanguage={handleChangeLanguage}
						isOpenBurger={isOpenBurger}
						setIsOpenBurger={setIsOpenBurger}
					/>
				</div>
			</header>
		</PageNameContext.Provider>
	);
};

export default Header;

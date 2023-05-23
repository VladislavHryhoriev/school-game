import { useState } from 'react';
import s from './Header.module.scss';
import Logo from './Logo';
import Menu from './Menu';
import Social from './SocialLink';

const Header = () => {
	const [language, setLanguage] = useState(0);
	const lang = language ? 'Ru' : 'En';

	return (
		<header className={s.header}>
			<div className={s.inner}>
				<Logo />
				<nav className={s.navigation}>
					<Menu />
					<Social />
					<button className={s.langSwitcher} onClick={() => setLanguage(!language)}>
						{lang}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;

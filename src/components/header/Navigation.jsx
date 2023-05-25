/// import style from Header
import s from './Header.module.scss';
import Menu from './Menu';
import Social from './SocialLink';

const Navigation = ({ setLanguage, language, lang }) => {
	return (
		<nav className={s.navigation}>
			<Menu />
			<Social />
			<button className={s.langSwitcher} onClick={() => setLanguage(!language)}>
				{lang}
			</button>
		</nav>
	);
};

export default Navigation;

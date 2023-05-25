/// import style from Header
import s from './Header.module.scss';
import Menu from './Menu';
import Social from './SocialLink';

const BurgerMenu = ({ language, setLanguage, isActive, lang }) => {
	return (
		<div className={`${s.burgerMenu} ${s.showBurger} ${isActive ? s.activeMenu : ''}`}>
			<Menu />
			<Social />
			<button className={s.langSwitcher} onClick={() => setLanguage(!language)}>
				{lang}
			</button>
		</div>
	);
};

export default BurgerMenu;

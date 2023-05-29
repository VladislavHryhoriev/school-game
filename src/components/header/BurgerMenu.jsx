/// import style from Header
import { useRouter } from 'next/router';
import s from './Navigation.module.scss';
import Menu from './Menu';
import Social from './SocialLink';

const BurgerMenu = ({ isActive }) => {
	const { locale, push, asPath } = useRouter();

	const changeLanguage = (e) => {
		const locale = e.target.value;
		push(asPath, asPath, { locale });
	};

	return (
		<div className={`${s.burgerMenu} ${s.showBurger} ${isActive ? s.activeMenu : ''}`}>
			<Menu />
			<Social />
			<select defaultValue={locale} onChange={changeLanguage} className={s.langSelect}>
				<option className={s.selector} value='en'>
					EN
				</option>
				<option className={s.selector} value='ru'>
					RU
				</option>
			</select>
		</div>
	);
};

export default BurgerMenu;

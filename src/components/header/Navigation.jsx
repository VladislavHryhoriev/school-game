/// import style from Header
import { useRouter } from 'next/router';
import Menu from './Menu';
import s from './Navigation.module.scss';
import Social from './SocialLink';

const Navigation = () => {
	const { locale, push, asPath } = useRouter();

	const changeLanguage = (e) => {
		const locale = e.target.value;
		push(asPath, asPath, { locale });
	};

	return (
		<nav className={s.navigation}>
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
		</nav>
	);
};

export default Navigation;

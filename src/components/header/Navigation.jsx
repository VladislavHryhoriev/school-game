import cn from 'classnames';
import { useRouter } from 'next/router';
import Menu from './Menu';
import s from './Navigation.module.scss';
import Social from './SocialLink';

const Navigation = ({ device, isOpen, handleChangeLanguage }) => {
	const { locale } = useRouter();

	const cnNavigation = cn({
		[s.navigation]: device === 'desktop',
		[s.burgerMenu]: device === 'mobile',
		[s.showBurger]: device === 'mobile',
		[s.activeMenu]: isOpen,
	});

	return (
		<nav className={cnNavigation}>
			<Menu />
			<Social />
			<select
				defaultValue={locale}
				onChange={handleChangeLanguage}
				className={s.langSelect}>
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

import s from './Menu.module.scss';
import MenuLink from './MenuLink';

const Menu = () => {
	const pages = {
		home: 'Главная',
		download: 'Скачать',
		changelog: 'Изменения',
	};

	const { home, download, changelog } = pages;

	return (
		<ul className={s.menu}>
			<MenuLink page='/' title={home} />
			<MenuLink page='/download' title={download} />
			<MenuLink page='/changelog' title={changelog} />
		</ul>
	);
};

export default Menu;

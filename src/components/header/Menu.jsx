import s from './Menu.module.scss';
import MenuLink from './MenuLink';

const Menu = () => {
	return (
		<ul className={s.menu}>
			<MenuLink page='/' title='Главная' />
			<MenuLink page='/download' title='Скачать' />
			<MenuLink page='/changelog' title='Изменения' />
		</ul>
	);
};

export default Menu;

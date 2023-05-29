import { useTranslation } from 'next-i18next';
import s from './Menu.module.scss';
import MenuLink from './MenuLink';

const Menu = () => {
	const { t } = useTranslation('common');

	return (
		<ul className={s.menu}>
			<MenuLink page='/' title={t('header.home')} />
			<MenuLink page='/download' title={t('header.download')} />
			<MenuLink page='/changelog' title={t('header.changelog')} />
		</ul>
	);
};

export default Menu;

import Link from 'next/link';
import s from './MenuLink.module.scss';

const MenuLink = ({ title, page }) => {
	return (
		<li>
			<Link href={page} className={s.link}>
				{title}
			</Link>
		</li>
	);
};

export default MenuLink;

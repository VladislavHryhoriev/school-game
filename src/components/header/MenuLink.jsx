import Link from 'next/link';
import s from './MenuLink.module.scss';
import { useContext } from 'react';
import { PageNameContext } from '@/context/pageNameContext';

const MenuLink = ({ title, page }) => {
	const { getPageName } = useContext(PageNameContext);

	return (
		<li>
			<Link href={page} className={s.link} onClick={() => getPageName(title)}>
				{title}
			</Link>
		</li>
	);
};

export default MenuLink;

import { PageNameContext } from '@/context/pageNameContext';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import s from './MenuLink.module.scss';

const MenuLink = ({ title, page }) => {
	const { getPageName } = useContext(PageNameContext);
	const { pathname } = useRouter();
	const isActive = pathname === page;

	return (
		<li>
			<Link
				href={page}
				className={cn(s.link, { [s.active]: isActive })}
				onClick={() => getPageName(title)}>
				{title}
			</Link>
		</li>
	);
};

export default MenuLink;

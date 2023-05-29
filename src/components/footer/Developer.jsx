import s from './Developer.module.scss';
import Link from './Link';
import { useTranslation } from 'next-i18next';

const Developer = () => {
	const { t } = useTranslation('common');
	const data = [
		{
			id: 1,
			link: 'https://boosty.to/school123',
			imageUrl: '/assets/boosty-icon-2.png',
		},
		{
			id: 2,
			link: 'https://discord.gg/sCQW9bBHyC',
			imageUrl: '/assets/discord-icon-2.png',
		},
		{
			id: 3,
			link: 'https://t.me/SchoolGameNews',
			imageUrl: '/assets/telegram-icon-2.png',
		},
		{
			id: 4,
			link: 'https://vk.com/schoolgame_kaito',
			imageUrl: '/assets/vk-icon-2.png',
		},
	];

	return (
		<div className={s.developer}>
			<h3 className={s.title}>{t('footer.developer-title')}</h3>
			<ul className={s.links}>
				{data.map((data) => (
					<Link key={data.id} {...data} />
				))}
			</ul>
		</div>
	);
};

export default Developer;

import Link from './Link';
import s from './SocialLink.module.scss';

const Social = () => {
	const data = [
		{
			id: 1,
			url: 'https://boosty.to/school123',
			imageUrl: '/assets/boosty-icon.png',
			alt: 'boosty-icon',
		},
		{
			id: 2,
			url: 'https://vk.com/schoolgame_kaito',
			imageUrl: '/assets/vk-icon.png',
			alt: 'vk-icon',
		},
		{
			id: 3,
			url: 'https://www.patreon.com/school123/membership',
			imageUrl: '/assets/patreon-icon.png',
			alt: 'patreon-icon',
		},
	];

	return (
		<ul className={s.social}>
			{data.map((data) => (
				<Link key={data.id} {...data} />
			))}
		</ul>
	);
};

export default Social;

import { useContext } from 'react';
import Logo from './Logo';
import s from './Widget.module.scss';
import { WidgetContext } from '@/context/widgetContext';

const Widget = () => {
	const { instant_invite, presence_count, name, members } = useContext(WidgetContext);
	return (
		<a className={s.widget} href={instant_invite} target='_blank' rel='nofollow'>
			<Logo />
			<div className={s.members}>
				<p>Online: {presence_count}</p>
				<h2 className={s.title}>{name}</h2>
				<ul className={s.list}>
					{members.map((member) => (
						<li className={`${s.member} ${member.status}`} key={member.id}>
							<p>{member.username}</p>
							{member.game && <span className={s.activity}>{member.game.name}</span>}
						</li>
					))}
				</ul>
			</div>
		</a>
	);
};

export default Widget;

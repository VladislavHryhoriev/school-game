import { v4 } from 'uuid';
import s from './ChangelogContent.module.scss';

const ChangelogContent = ({ content, headerText }) => {
	return (
		<div className={s.bugfix}>
			<h3 className={s.header}>{headerText}:</h3>
			{content.map((item) => (
				<p className={s.text} key={v4()}>
					{item}
				</p>
			))}
		</div>
	);
};

export default ChangelogContent;

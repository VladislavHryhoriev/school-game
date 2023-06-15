import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import ChangelogContent from './ChangelogContent';
import s from './Dropdown.module.scss';

const Dropdown = ({ title, content }) => {
	const { t } = useTranslation('common');
	const [isOpened, setIsOpened] = useState(false);
	const newContent = content.new
		.trim()
		.split('\n')
		.map((text) => text.trim());

	const bugfixContent = content.bugfix
		.trim()
		.split('\n')
		.map((text) => text.trim());

	return (
		<div className={s.dropdown}>
			<button
				className={`${s.button} ${isOpened ? s.btnActive : ''}`}
				onClick={() => setIsOpened(!isOpened)}>
				{title}
			</button>
			<div className={`${s.content} ${isOpened ? s.active : ''}`}>
				<ChangelogContent
					content={newContent}
					headerText={t('changelog.new')}
				/>
				<ChangelogContent
					content={bugfixContent}
					headerText={t('changelog.bugfix')}
				/>
			</div>
		</div>
	);
};

export default Dropdown;

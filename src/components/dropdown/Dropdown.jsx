import { useState } from 'react';
import { v4 } from 'uuid';
import s from './Dropdown.module.scss';
import { useTranslation } from 'next-i18next';

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
				<div className={s.new}>
					<h3 className={s.header}>{t('changelog.new')}:</h3>
					{newContent.map((item) => (
						<p className={s.text} key={v4()}>
							{item}
						</p>
					))}
				</div>
				<div className={s.bugfix}>
					<h3 className={s.header}>{t('changelog.bugfix')}:</h3>
					{bugfixContent.map((item) => (
						<p className={s.text} key={v4()}>
							{item}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;

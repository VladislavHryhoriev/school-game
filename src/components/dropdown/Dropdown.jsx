import { useState } from 'react';
import { v4 } from 'uuid';
import s from './Dropdown.module.scss';

const Dropdown = ({ title, content }) => {
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
			<div
				className={`${s.content} ${isOpened ? s.active : ''}`}
				onClick={() => setIsOpened(!isOpened)}>
				<div className={s.new}>
					<h3 className={s.header}>Новый контент:</h3>
					{newContent.map((item) => (
						<p className={s.text} key={v4()}>
							{item}
						</p>
					))}
				</div>
				<div className={s.bugfix}>
					<h3 className={s.header}>Исправленные баги:</h3>
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

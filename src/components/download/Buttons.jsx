import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import s from './Buttons.module.scss';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const [email, setEmail] = useState('');
	const { t } = useTranslation('common');

	const handleButtonClick = async (e) => {
		e.preventDefault();
		// setEmail(data.email);
		try {
			const response = await fetch(`/api/getEmail?email=${email.trim()}`);
			const data = await response.json();

			console.log(data);
		} catch (error) {
			console.error('Error fetching email:', error);
		}
	};

	return (
		<div className={s.buttons}>
			<div className={s.wrapper}>
				<button
					className={`${s.btn} ${s.free} ${isPremium ? '' : s.active}`}
					onClick={() => setIsPremium(false)}>
					{t('download.buttons.free')}
				</button>
				<button
					className={`${s.btn} ${s.premium} ${isPremium ? s.active : ''}`}
					onClick={() => setIsPremium(true)}>
					{t('download.buttons.premium')}
				</button>
			</div>
			{isPremium ? (
				<form onSubmit={handleButtonClick} className={s.emailForm}>
					<input
						className={s.email}
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={t('download.placeholder')}
					/>
					<button type='submit' className={s.send}>
						{t('download.buttons.get')}
					</button>
				</form>
			) : (
				<button className={s.download} onClick={() => setShowModal(true)}>
					{t('download.buttons.download')}
				</button>
			)}
		</div>
	);
};

export default Buttons;

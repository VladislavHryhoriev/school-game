import { useTranslation } from 'next-i18next';
import { useRef, useState } from 'react';
import s from './Buttons.module.scss';
import { useRouter } from 'next/router';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const [email, setEmail] = useState('');
	const { t } = useTranslation('common');
	const buttonRef = useRef();

	const router = useRouter();

	const handleButtonClick = async (e) => {
		e.preventDefault();
		buttonRef.current.textContent = '...';
		try {
			const formatEmail = email.trim().toLowerCase();
			const response = await fetch(`/api/get-email?email=${formatEmail}`);
			const data = await response.json();

			if (data.length) {
				const { Tier } = data;

				if (Tier !== 'Supporter') {
					// Downloading logic
					const archiveName = 'school-game_0.942';
					const token = 'RdHl2w';

					router.push(`/api/premium-download?v=${archiveName}&token=${token}`);
					// const res = await fetch(`/api/premium-download?v=${archiveName}&token=${token}`);

					buttonRef.current.textContent = '✅';
					buttonRef.current.style.backgroundColor = '#00ff44';

					setTimeout(() => {
						buttonRef.current.textContent = t('download.buttons.get');
						buttonRef.current.style.backgroundColor = '#5865f2';
					}, 2000);
				}
			} else {
				buttonRef.current.textContent = '❌';
				buttonRef.current.style.backgroundColor = '#ff4444';

				console.log('This email is invalid');

				setTimeout(() => {
					buttonRef.current.style.backgroundColor = '#5865f2';
					buttonRef.current.textContent = t('download.buttons.get');
				}, 2000);
			}
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
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={t('download.placeholder')}
						required
					/>
					<button ref={buttonRef} type='submit' className={s.send}>
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

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import s from './Buttons.module.scss';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');
	const [log, setLog] = useState('');
	const [buttonText, setButtonText] = useState(t('download.buttons.get'));

	const buttonDefaultText = t('download.buttons.get');

	const handleButtonClick = async (e) => {
		e.preventDefault();
		setButtonText('...');

		try {
			const formatEmail = email.trim().toLowerCase();
			const response = await fetch(`/api/get-email?email=${formatEmail}`);
			const { status } = await response.json();

			switch (status) {
				case 'ok':
					setLog(t('download-status.ok'));
					setButtonText(buttonDefaultText);

					const archiveName = 'school-game_0.942';
					const token = 'RdHl2w';

					router.push(`/api/premium-download?v=${archiveName}&token=${token}`);
					break;

				case 'supporter':
					setLog(t('download-status.supporter'));
					setButtonText(buttonDefaultText);

					break;

				case 'failed':
					setLog(t('download-status.failed'));
					setButtonText(buttonDefaultText);

					break;

				default:
					setLog('Server Error');
					setButtonText(buttonDefaultText);

					break;
			}

			setTimeout(() => setLog(''), 5000);
		} catch (error) {
			console.error('Error fetching email:', error);
		}
	};

	return (
		<div className={s.buttons}>
			<div className={s.log}>{log}</div>
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
					<button type='submit' className={s.send}>
						{buttonText}
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

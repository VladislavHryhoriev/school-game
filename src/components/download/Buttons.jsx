import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import s from './Buttons.module.scss';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');
	const [key, setKey] = useState('');
	const [status, setStatus] = useState('');
	const [statuslog, setStatusLog] = useState('');
	const [buttonText, setButtonText] = useState(t('download.buttons.get'));
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const buttonDefaultText = t('download.buttons.get');

	const handleButtonClick = async (e) => {
		e.preventDefault();
		setIsButtonDisabled(true);
		setStatusLog('');
		setButtonText('...');

		try {
			const res = await fetch(`/api/get-email`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(email),
			});
			const { status, key } = await res.json();

			// difference stateStatus and status need calling api for useEffect
			setStatus(status);

			switch (status) {
				case 'ok':
					setStatusLog(t('download-status.ok'));
					setKey(key);
					break;
				case 'supporter':
					setStatusLog(t('download-status.supporter'));
					break;
				case 'failed':
					setStatusLog(t('download-status.failed'));
					break;
				default:
					setStatusLog('Server Error');
					break;
			}

			setIsButtonDisabled(false);
			setButtonText(buttonDefaultText);
			setTimeout(() => setStatusLog(''), 5000);
		} catch (error) {
			console.error('Error fetching email:', error);
		}
	};

	useEffect(() => {
		if (status === 'ok') {
			router.push(`/api/premium-download?key=${key}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key]);

	return (
		<div className={s.buttons}>
			<p className={s.statuslog}>{statuslog}</p>
			<div className={s.wrapper}>
				<button
					className={`${s.btn} ${s.free} ${isPremium ? '' : s.active}`}
					disabled={isButtonDisabled}
					onClick={() => setIsPremium(false)}>
					{t('download.buttons.free')}
				</button>
				<button
					className={`${s.btn} ${s.premium} ${isPremium ? s.active : ''}`}
					disabled={isButtonDisabled}
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
					<button type='submit' disabled={isButtonDisabled} className={s.send}>
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

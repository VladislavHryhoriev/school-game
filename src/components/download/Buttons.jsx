import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import s from './Buttons.module.scss';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');
	const [statuslog, setStatusLog] = useState('');
	const [status, setStatus] = useState('');
	const [buttonText, setButtonText] = useState(t('download.buttons.get'));
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const buttonDefaultText = t('download.buttons.get');

	const handleButtonClick = async (e) => {
		e.preventDefault();
		setIsButtonDisabled(true);
		setButtonText('...');

		try {
			const formatEmail = email.trim().toLowerCase();
			const res = await fetch(`/api/get-email?email=${formatEmail}`);
			const { status } = await res.json();
			// difference stateStatus and status
			setStatus(status);

			switch (status) {
				case 'ok':
					setStatusLog(t('download-status.ok'));

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
			const archiveName = 'school-game_latest-0.942';
			const token = 'RdHl2w';
			router.push(`/api/premium-download?v=${archiveName}&token=${token}`);
		}
	}, [router, status]);

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

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './PremiumDownloadButton.module.scss';

const PremiumDownloadButton = ({
	platformName,
	setOpenModal,
	setIsButtonDisabled,
	setStatusLog,
	setButtonText,
	email,
}) => {
	const router = useRouter();
	const { t } = useTranslation('common');
	const buttonDefaultText = t('download.buttons.get');

	const handleClick = async () => {
		setOpenModal(false);
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

			switch (status) {
				case 'ok':
					setStatusLog(t('download-status.ok'));
					router.push(
						`/api/premium-download?key=${key}&platform=${platformName}`
					);
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

	return (
		<button onClick={handleClick} className={s.version}>
			<Image
				className={s.image}
				src={`/assets/download/${platformName}.png`}
				width={32}
				height={32}
				alt='image'
			/>
		</button>
	);
};

export default PremiumDownloadButton;

import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import s from './Buttons.module.scss';
import PremiumDownloadForm from './PremiumDownloadForm';

const Buttons = ({ isPremium, setIsPremium, setOpenModal }) => {
	const { t } = useTranslation('common');
	const [statuslog, setStatusLog] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
				<PremiumDownloadForm
					setStatusLog={setStatusLog}
					isButtonDisabled={isButtonDisabled}
					setIsButtonDisabled={setIsButtonDisabled}
				/>
			) : (
				<button className={s.download} onClick={() => setOpenModal(true)}>
					{t('download.buttons.download')}
				</button>
			)}
		</div>
	);
};

export default Buttons;

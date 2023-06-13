import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { v4 } from 'uuid';
import Modal from '../modal/Modal';
import s from './Buttons.module.scss';
import PremiumDownloadButton from './PremiumDownloadButton';
import VersionBox from './VersionBox';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');
	const [statuslog, setStatusLog] = useState('');
	const [buttonText, setButtonText] = useState(t('download.buttons.get'));
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [activeModal, setActiveModal] = useState(false);

	const handleButtonClick = async (e) => {
		e.preventDefault();
		setActiveModal(true);
	};

	const platforms = [
		{
			name: 'windows',
		},
		{
			name: 'linux',
		},
		{
			name: 'mac',
		},
		{
			name: 'android',
		},
	];

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
					<Modal active={activeModal} setActive={setActiveModal}>
						<h3 className={s.title}>{t('modal.platform-title')}</h3>
						<ul className={s.versions}>
							<VersionBox>
								{platforms.map((platforms) => (
									<PremiumDownloadButton
										key={v4()}
										setActiveModal={setActiveModal}
										platformName={platforms.name}
										setIsButtonDisabled={setIsButtonDisabled}
										setStatusLog={setStatusLog}
										setButtonText={setButtonText}
										email={email}
									/>
								))}
							</VersionBox>
						</ul>
					</Modal>
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

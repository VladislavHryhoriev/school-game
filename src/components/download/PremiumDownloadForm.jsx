import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Modal from '../modal/Modal';
import s from './PremiumDownloadForm.module.scss';
import ModalContentPremium from './ModalContentPremium';

const PremiumDownloadForm = ({
	setStatusLog,
	isButtonDisabled,
	setIsButtonDisabled,
}) => {
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');
	const [buttonText, setButtonText] = useState(t('download.buttons.get'));
	const [openModal, setOpenModal] = useState(false);

	const handleButtonClick = async (e) => {
		e.preventDefault();
		setOpenModal(true);
	};

	return (
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
			<Modal openModal={openModal} setOpenModal={setOpenModal}>
				<ModalContentPremium
					setOpenModal={setOpenModal}
					setStatusLog={setStatusLog}
					setButtonText={setButtonText}
					setIsButtonDisabled={setIsButtonDisabled}
					email={email}
				/>
			</Modal>
		</form>
	);
};

export default PremiumDownloadForm;

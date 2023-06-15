import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/Modal';
import Buttons from './Buttons';
import s from './Description.module.scss';
import Freemium from './Freemium';
import ModalContentFree from './ModalContentFree';

const Description = ({ isPremium, setIsPremium }) => {
	const { t } = useTranslation('common');
	const [openModal, setOpenModal] = useState(false);

	const free = {
		title: t('download.free.title'),
		text: t('download.free.text'),
		imageUrl: '/assets/overview/free-1.webp',
	};

	const premium = {
		title: t('download.premium.title'),
		text: t('download.premium.text'),
		imageUrl: '/assets/overview/premium-1.webp',
	};

	return (
		<div className={s.description}>
			{isPremium ? (
				<Freemium title={premium.title} text={premium.text} />
			) : (
				<Freemium title={free.title} text={free.text} />
			)}
			<div className={s.imageBox}>
				<Image
					className={s.image}
					src={isPremium ? premium.imageUrl : free.imageUrl}
					width={300}
					height={200}
					alt='image'
				/>
			</div>
			<Buttons
				isPremium={isPremium}
				setIsPremium={setIsPremium}
				setOpenModal={setOpenModal}
			/>
			<Modal openModal={openModal} setOpenModal={setOpenModal}>
				<ModalContentFree setShowModal={setOpenModal} />
			</Modal>
		</div>
	);
};

export default Description;

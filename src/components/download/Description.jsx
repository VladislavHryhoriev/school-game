import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/Modal';
import Buttons from './Buttons';
import s from './Description.module.scss';
import Freemium from './Freemium';
import VersionBox from './VersionBox';
import { useTranslation } from 'next-i18next';

const Description = ({ isPremium, setIsPremium }) => {
	const [showModal, setShowModal] = useState(false);
	const { t } = useTranslation('common');

	const free = {
		title: t('download.free.title'),
		text: t('download.free.text'),
		imageUrl: '/assets/[imgFree].webp',
	};

	const premium = {
		title: t('download.premium.title'),
		text: t('download.premium.text'),
		imageUrl: '/assets/[imgPremium].webp',
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
			<Buttons isPremium={isPremium} setIsPremium={setIsPremium} setShowModal={setShowModal} />
			<Modal active={showModal} setActive={setShowModal}>
				<div className={s.modalWrapper}>
					<h3 className={s.title}>{t('modal.title')}</h3>
					<ul className={s.versions}>
						<VersionBox v='0.941' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.940' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.939' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.938' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.937' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.936' showModal={showModal} setShowModal={setShowModal} />
					</ul>
				</div>
			</Modal>
		</div>
	);
};

export default Description;

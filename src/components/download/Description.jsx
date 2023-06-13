import { DownloadVersionLinksContext } from '@/context/downloadVersionLinksContext';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Modal from '../modal/Modal';
import Buttons from './Buttons';
import s from './Description.module.scss';
import Freemium from './Freemium';
import VersionBox from './VersionBox';
import FreeDownloadButton from './FreeDownloadButton';
import { v4 } from 'uuid';

const Description = ({ isPremium, setIsPremium }) => {
	const downloadVersions = useContext(DownloadVersionLinksContext);
	const { t } = useTranslation('common');
	const [showModal, setShowModal] = useState(false);

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
				setShowModal={setShowModal}
			/>
			<Modal active={showModal} setActive={setShowModal}>
				<h3 className={s.title}>{t('modal.title')}</h3>
				<ul className={s.versions}>
					{downloadVersions.map((downloadVersion) => (
						<VersionBox
							key={downloadVersion.version}
							setShowModal={setShowModal}
							{...downloadVersion}>
							{downloadVersion.platforms.map((platform) => (
								<FreeDownloadButton
									key={v4()}
									setShowModal={setShowModal}
									version={downloadVersion.version}
									{...platform}
								/>
							))}
						</VersionBox>
					))}
				</ul>
			</Modal>
		</div>
	);
};

export default Description;

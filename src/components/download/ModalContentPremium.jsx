import { v4 } from 'uuid';
import PremiumDownloadButton from './PremiumDownloadButton';
import VersionBox from './VersionBox';
import s from './ModalContentPremium.module.scss';
import { useTranslation } from 'next-i18next';

const platforms = [
	{ name: 'windows' },
	{ name: 'linux' },
	{ name: 'mac' },
	{ name: 'android' },
];

const ModalContentPremium = ({
	setOpenModal,
	setStatusLog,
	setButtonText,
	setIsButtonDisabled,
	email,
}) => {
	const { t } = useTranslation('common');

	return (
		<>
			<h3 className={s.title}>{t('modal.platform-title')}</h3>
			<ul className={s.versions}>
				<VersionBox>
					{platforms.map((platform) => (
						<PremiumDownloadButton
							key={v4()}
							setOpenModal={setOpenModal}
							platformName={platform.name}
							setIsButtonDisabled={setIsButtonDisabled}
							setStatusLog={setStatusLog}
							setButtonText={setButtonText}
							email={email}
						/>
					))}
				</VersionBox>
			</ul>
		</>
	);
};

export default ModalContentPremium;

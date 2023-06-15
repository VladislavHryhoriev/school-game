import { v4 } from 'uuid';
import FreeDownloadButton from './FreeDownloadButton';
import VersionBox from './VersionBox';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import s from './ModalContentFree.module.scss';
import { DownloadVersionLinksContext } from '@/context/downloadVersionLinksContext';

const ModalContentFree = ({ setShowModal }) => {
	const downloadVersions = useContext(DownloadVersionLinksContext);
	const { t } = useTranslation('common');

	return (
		<>
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
		</>
	);
};

export default ModalContentFree;

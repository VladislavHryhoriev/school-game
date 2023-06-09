import { v4 } from 'uuid';
import FreeDownloadButton from './FreeDownloadButton';
import s from './VersionBox.module.scss';

const VersionBox = ({ setShowModal, version, platforms }) => {
	return (
		<>
			<span className={s.nameTop}>{version}</span>
			<li className={s.versionBox}>
				<span className={s.name}>{version}</span>
				{platforms.map((platform) => (
					<FreeDownloadButton
						key={v4()}
						setShowModal={setShowModal}
						version={version}
						{...platform}
					/>
				))}
			</li>
		</>
	);
};

export default VersionBox;

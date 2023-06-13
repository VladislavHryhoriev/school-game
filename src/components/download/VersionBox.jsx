import s from './VersionBox.module.scss';

const VersionBox = ({ version = '', children }) => {
	return (
		<>
			{version && <span className={s.nameTop}>{version}</span>}
			<li className={s.versionBox}>
				{version && <span className={s.name}>{version}</span>}
				{children}
			</li>
		</>
	);
};

export default VersionBox;

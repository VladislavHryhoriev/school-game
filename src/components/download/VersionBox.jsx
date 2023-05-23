import Image from 'next/image';
import s from './VersionBox.module.scss';

const VersionBox = ({ v, showModal, setShowModal }) => {
	return (
		<li className={s.versionBox}>
			<span className={s.name}>{v}</span>
			<a href={`#${v}-windows`} onClick={() => setShowModal(false)} className={s.version}>
				<Image
					className={s.image}
					src={'/assets/download/windows.png'}
					width={32}
					height={32}
					alt='image'
				/>
			</a>
			<a href={`#${v}-mac`} onClick={() => setShowModal(false)} className={s.version}>
				<Image
					className={s.image}
					src={'/assets/download/mac.png'}
					width={32}
					height={32}
					alt='image'
				/>
			</a>
			<a href={`#${v}-linux`} onClick={() => setShowModal(false)} className={s.version}>
				<Image
					className={s.image}
					src={'/assets/download/linux.png'}
					width={32}
					height={32}
					alt='image'
				/>
			</a>
			<a href={`#${v}-android`} onClick={() => setShowModal(false)} className={s.version}>
				<Image
					className={s.image}
					src={'/assets/download/android.png'}
					width={32}
					height={32}
					alt='image'
				/>
			</a>
		</li>
	);
};

export default VersionBox;

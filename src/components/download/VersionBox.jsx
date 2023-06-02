import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './VersionBox.module.scss';

const VersionBox = ({ version, setShowModal }) => {
	const router = useRouter();

	const handleClick = async (platform) => {
		setShowModal(false);
		router.push(`/api/free-download?platform=${platform}&version=${version}`);
	};

	return (
		<>
			<span className={s.nameTop}>{version}</span>
			<li className={s.versionBox}>
				<span className={s.name}>{version}</span>
				<button onClick={() => handleClick('win')} className={s.version}>
					<Image
						className={s.image}
						src={'/assets/download/windows.png'}
						width={32}
						height={32}
						alt='image'
					/>
				</button>
				<button onClick={() => handleClick('mac')} className={s.version}>
					<Image
						className={s.image}
						src={'/assets/download/mac.png'}
						width={32}
						height={32}
						alt='image'
					/>
				</button>
				<button onClick={() => handleClick('linux')} className={s.version}>
					<Image
						className={s.image}
						src={'/assets/download/linux.png'}
						width={32}
						height={32}
						alt='image'
					/>
				</button>
				<button onClick={() => handleClick('android')} className={s.version}>
					<Image
						className={s.image}
						src={'/assets/download/android.png'}
						width={32}
						height={32}
						alt='image'
					/>
				</button>
			</li>
		</>
	);
};

export default VersionBox;

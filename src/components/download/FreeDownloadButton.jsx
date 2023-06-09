import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './FreeDownloadButton.module.scss';

const FreeDownloadButton = ({
	setShowModal,
	platformName,
	fileId,
	version,
}) => {
	const router = useRouter();

	const handleClick = async () => {
		setShowModal(false);
		router.push(
			`/api/free-download?id=${fileId}&platform=${platformName}&version=${version}`
		);
	};

	return (
		<button onClick={() => handleClick()} className={s.version}>
			<Image
				className={s.image}
				src={`/assets/download/${platformName}.png`}
				width={32}
				height={32}
				alt='image'
			/>
		</button>
	);
};

export default FreeDownloadButton;

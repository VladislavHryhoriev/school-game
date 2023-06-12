import Image from 'next/image';
import Link from 'next/link';
import s from './FreeDownloadButton.module.scss';

const FreeDownloadButton = ({ setShowModal, platformName, fileId }) => {
	const handleClick = async () => {
		setShowModal(false);
	};

	return (
		<Link
			href={`https://drive.google.com/uc?export=download&confirm=no_antivirus&id=${fileId}`}
			onClick={() => handleClick()}
			className={s.version}
			target='_blank'>
			<Image
				className={s.image}
				src={`/assets/download/${platformName}.png`}
				width={32}
				height={32}
				alt='image'
			/>
		</Link>
	);
};

export default FreeDownloadButton;

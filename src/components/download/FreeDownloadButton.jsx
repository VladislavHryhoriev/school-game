import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './FreeDownloadButton.module.scss';
import Link from 'next/link';

const FreeDownloadButton = ({
	setShowModal,
	platformName,
	// fileId,
	version,
}) => {
	const router = useRouter();

	const fileId = '1CB_OW3xmlWWIxKe5nJYlQYMMk3jjIsBs';

	const handleClick = async () => {
		setShowModal(false);
		router.push(
			`/api/free-download?fileId=${fileId}&platform=${platformName}&version=${version}`
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

		// <Link
		// 	href={`https://drive.google.com/uc?export=download&confirm=no_antivirus&id=${fileId}`}
		// 	onClick={() => handleClick()}
		// 	className={s.version}>
		// 	<Image
		// 		className={s.image}
		// 		src={`/assets/download/${platformName}.png`}
		// 		width={32}
		// 		height={32}
		// 		alt='image'
		// 	/>
		// </Link>

		// <Link
		// 	href={`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=AIzaSyCfqio3D02TmF-O8czXMON_NGJQp7fnEuk`}
		// 	onClick={() => handleClick()}
		// 	className={s.version}>
		// 	<Image
		// 		className={s.image}
		// 		src={`/assets/download/${platformName}.png`}
		// 		width={32}
		// 		height={32}
		// 		alt='image'
		// 	/>
		// </Link>
	);
};

export default FreeDownloadButton;

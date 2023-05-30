import Description from '@/components/download/Description';
import Images from '@/components/download/Images';
import s from '@/styles/pages/download.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useState } from 'react';

export default function Page() {
	const [isPremium, setIsPremium] = useState(false);

	const links = {
		free: [
			'/assets/overview/free-1.webp',
			'/assets/overview/free-2.webp',
			'/assets/overview/free-3.webp',
		],
		premium: [
			'/assets/overview/premium-1.webp',
			'/assets/overview/premium-2.webp',
			'/assets/overview/premium-3.webp',
		],
	};

	const images = isPremium ? links.premium : links.free;

	return (
		<>
			<Head>
				<title>Sloths Command - Versions</title>
			</Head>
			<main className={s.versions}>
				<div className='container'>
					<div className={s.inner}>
						<div className={s.info}>
							<Description isPremium={isPremium} setIsPremium={setIsPremium} />
							<Images images={images} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
		revalidate: 60,
	};
}

import Description from '@/components/download/Description';
import Images from '@/components/download/Images';
import s from '@/styles/pages/download.module.scss';
import Head from 'next/head';
import { useState } from 'react';

export default function Page() {
	const [isPremium, setIsPremium] = useState(false);

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
							<Images isPremium={isPremium} setIsPremium={setIsPremium} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

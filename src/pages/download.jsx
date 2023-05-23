import { useState } from 'react';
import s from '@/styles/pages/download.module.scss';
import Description from '@/components/download/Description';
import Images from '@/components/download/Images';

export default function Page() {
	const [isPremium, setIsPremium] = useState(false);

	return (
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
	);
}

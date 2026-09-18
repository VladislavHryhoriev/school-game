import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import s from './Hero.module.scss';

const Hero = () => {
	const { t } = useTranslation('common');

	return (
		<section className={s.hero}>
			<div className='container'>
				<div className={s.panel}>
					<div className={s.copy}>
						<p className={s.eyebrow}>{t('home.eyebrow')}</p>
						<h1 className={s.title}>{t('home.title')}</h1>
						<p className={s.tagline}>{t('home.tagline')}</p>
						<div className={s.actions}>
							<Link href='/download' className={s.primary}>
								{t('home.cta-download')}
							</Link>
							<a
								href='https://discord.gg/sCQW9bBHyC'
								className={s.secondary}
								target='_blank'
								rel='nofollow noreferrer'>
								{t('home.cta-community')}
							</a>
						</div>
					</div>
					<div className={s.art} aria-hidden='true'>
						<Image
							className={s.shotMain}
							src='/assets/carousel/slide-1.webp'
							width={720}
							height={405}
							alt=''
							priority
						/>
						<Image
							className={s.shotAlt}
							src='/assets/carousel/slide-3.webp'
							width={420}
							height={236}
							alt=''
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

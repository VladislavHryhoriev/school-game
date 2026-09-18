import Dropdown from '@/components/changelog/Dropdown';
import { changelogVersionsLocale } from '@/data/changelogVersionsLocales';
import s from '@/styles/pages/changelog.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
export default function Changelog() {
	const { locale } = useRouter();
	const { t } = useTranslation('common');
	const data =
		locale === 'en' ? changelogVersionsLocale.en : changelogVersionsLocale.ru;

	return (
		<>
			<Head>
				<title>Sloths Command - Changelog</title>
			</Head>
			<main className={s.changelog}>
				<div className='container'>
					<div className={s.intro}>
						<p className={s.eyebrow}>{t('changelog.eyebrow')}</p>
						<h1 className={s.pageTitle}>{t('changelog.page-title')}</h1>
					</div>
					<div className={s.menu}>
						{data.map((version) => (
							<Dropdown key={version.id} {...version} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}

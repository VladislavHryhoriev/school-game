import Dropdown from '@/components/changelog/Dropdown';
import { changelogVersionsLocale } from '@/data/changelogVersionsLocalesMain';
import s from '@/styles/pages/changelog.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
	const data =
		locale === 'en' ? changelogVersionsLocale.en : changelogVersionsLocale.ru;

	return (
		<>
			<Head>
				<title>Sloths Command - Changelog</title>
			</Head>
			<main className={s.changelog}>
				<div className='container'>
					<div className={s.inner}>
						<div className={s.menu}>
							{data.map((version) => (
								<Dropdown key={version.id} {...version} />
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

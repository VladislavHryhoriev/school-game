import Dropdown from '@/components/dropdown/Dropdown';
import { versions } from '@/data/versions';
import s from '@/styles/pages/changelog.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Changelog() {
	return (
		<>
			<Head>
				<title>Sloths Command - Changelog</title>
			</Head>
			<main className={s.changelog}>
				<div className='container'>
					<div className={s.inner}>
						<div className={s.menu}>
							{versions.map((version) => (
								<Dropdown key={version.id} {...version} />
							))}
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
	};
}

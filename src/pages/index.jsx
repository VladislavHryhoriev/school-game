import Gallery from '@/components/gallery/Gallery';
import Home from '@/components/home/Home';
import { WidgetContext } from '@/context/widgetContext';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Page({ widget }) {
	return (
		<>
			<Head>
				<title>Sloths Command - Home</title>
			</Head>
			<WidgetContext.Provider value={widget}>
				<Home />
				<Gallery />
			</WidgetContext.Provider>
		</>
	);
}

export async function getStaticProps({ locale }) {
	const res = await fetch('https://discord.com/api/guilds/498237888782401567/widget.json');
	const widget = await res.json();

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			widget,
		},
		revalidate: 60,
	};
}

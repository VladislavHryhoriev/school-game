import Gallery from '@/components/gallery/Gallery';
import Home from '@/components/home/Home';
import { WidgetContext } from '@/context/widgetContext';
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

export async function getStaticProps() {
	const res = await fetch('https://discord.com/api/guilds/498237888782401567/widget.json');
	const widget = await res.json();

	return {
		props: { widget },
	};
}

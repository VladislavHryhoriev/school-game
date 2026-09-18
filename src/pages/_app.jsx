import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper should before main.scss dont touch this comment
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import '@/styles/main.scss';
import { appWithTranslation } from 'next-i18next';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
	display: 'swap',
});

const App = ({ Component, pageProps }) => {
	return (
		<div className={`${manrope.className} ${manrope.variable} wrapper`}>
			<SEO />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
};

export default appWithTranslation(App);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper should before main.scss
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import '@/styles/main.scss';
import { appWithTranslation } from 'next-i18next';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
	weight: ['400', '500'],
	subsets: ['latin'],
});

const App = ({ Component, pageProps }) => {
	return (
		<div className={`${rubik.className} wrapper`}>
			<SEO />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
};

export default appWithTranslation(App);

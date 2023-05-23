import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Swiper should before main.scss
import Layout from '@/components/layout/Layout';
import '@/styles/main.scss';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
	weight: ['400', '500'],
	subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
	return (
		<div className={`${rubik.className} wrapper`}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

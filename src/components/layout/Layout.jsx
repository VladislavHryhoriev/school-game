import ScrollToTop from 'react-scroll-up';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Image from 'next/image';

const Layout = ({ children }) => {
	return (
		<>
			<div className='background' />
			<Header />
			<ScrollToTop
				showUnder={160}
				style={{
					right: 50,
					bottom: 50,
					borderRadius: '2em',
					background: '#5865f2',
					zIndex: 10,
				}}>
				<Image
					className='up-arrow-image'
					src={'/assets/up-arrow.svg'}
					width={40}
					height={40}
					alt='up-arrow'
				/>
			</ScrollToTop>
			{children}
			<Footer />
		</>
	);
};

export default Layout;

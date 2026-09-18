import ScrollToTop from 'react-scroll-up';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Image from 'next/image';

const Layout = ({ children }) => {
	return (
		<>
			<div className='atmosphere' aria-hidden='true'>
				<div className='background' />
				<div className='glow glow-a' />
				<div className='glow glow-b' />
				<div className='noise' />
			</div>
			<Header />
			<ScrollToTop
				showUnder={160}
				style={{
					right: 28,
					bottom: 28,
					borderRadius: '2em',
					background: 'linear-gradient(135deg, #ff8fb3, #c45bff)',
					zIndex: 10,
					boxShadow: '0 0 24px rgba(255, 122, 168, 0.35)',
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

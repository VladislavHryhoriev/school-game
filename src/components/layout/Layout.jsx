import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }) => {
	return (
		<>
			<div className='background' />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

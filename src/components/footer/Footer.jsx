import Developer from './Developer';
import Feedback from './Feedback';
import s from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.contacts}>
				<Developer />
				<Feedback />
			</div>
		</footer>
	);
};

export default Footer;

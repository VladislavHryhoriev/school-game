import s from './Freemium.module.scss';

const Freemium = ({ title, text }) => {
	return (
		<div className={s.box}>
			<h2 className={s.title}>{title}</h2>
			<p className={s.text}>{text}</p>
		</div>
	);
};

export default Freemium;

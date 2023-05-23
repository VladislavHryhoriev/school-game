import s from './Description.module.scss';
import LogoBox from './LogoBox';
import TextBox from './TextBox';

const Description = () => {
	return (
		<div className={s.description}>
			<h1 className={s.title}>School Game</h1>
			<TextBox />
			<LogoBox />
		</div>
	);
};

export default Description;

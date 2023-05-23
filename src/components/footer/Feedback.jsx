import Image from 'next/image';
import s from './Feedback.module.scss';

const Feedback = () => {
	return (
		<div className={s.feedback}>
			<h3 className={s.title}>Обратная связь</h3>
			<form className={s.form}>
				<input className={s.email} type='email' name='email' placeholder='E-mail' />
				<a href='#' className={s.link}>
					<Image className={s.icon} src={'/assets/email.svg'} width={40} height={40} alt='icon' />
				</a>
			</form>
		</div>
	);
};

export default Feedback;

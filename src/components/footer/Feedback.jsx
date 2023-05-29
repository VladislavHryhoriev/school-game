import Image from 'next/image';
import s from './Feedback.module.scss';
import { useTranslation } from 'next-i18next';

const Feedback = () => {
	const { t } = useTranslation('common');

	return (
		<div className={s.feedback}>
			<h3 className={s.title}>{t('footer.feedback-title')}</h3>
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

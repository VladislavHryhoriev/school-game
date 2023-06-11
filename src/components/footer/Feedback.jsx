import { useTranslation } from 'next-i18next';
import s from './Feedback.module.scss';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
	const { t } = useTranslation('common');

	return (
		<div className={s.feedback}>
			<h3 className={s.title}>{t('footer.feedback-title')}</h3>
			<FeedbackForm />
		</div>
	);
};

export default Feedback;

import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import s from './Feedback.module.scss';

const Feedback = () => {
	const { t } = useTranslation('common');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const defaultButtonText = t('form.button');
	const [buttonText, setButtonText] = useState(defaultButtonText);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		const data = { name, email, message, date: new Date().toUTCString() };

		try {
			const response = await fetch('/api/contact', {
				method: 'post',
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setName('');
				setEmail('');
				setMessage('');
				setButtonText('✅');
			}
		} catch (error) {
			console.error('Error send form data:', error);
		}
	};

	return (
		<div className={s.feedback}>
			<h3 className={s.title}>{t('footer.feedback-title')}</h3>
			<form onSubmit={handleSubmit} className={s.form}>
				<div className={s.inputs}>
					<input
						className={s.input}
						type='text'
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder={t('form.name')}
						required
					/>
					<input
						className={s.input}
						type='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={t('form.email')}
						required
					/>
				</div>
				<textarea
					className={s.textarea}
					name='feedback'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder={t('form.message')}
					required
				/>
				<button type='submit' disabled={isSubmitting} className={s.submit}>
					{buttonText}
				</button>
			</form>
		</div>
	);
};

export default Feedback;

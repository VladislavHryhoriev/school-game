import { useTranslation } from 'next-i18next';
import s from './FeedbackForm.module.scss';
import { useState } from 'react';

const FeedbackForm = () => {
	const { t } = useTranslation('common');
	const defaultButtonText = t('form.button');
	const [buttonText, setButtonText] = useState(defaultButtonText);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setButtonText('...');

		const formData = { name, email, message };

		try {
			const response = await fetch('/api/send-feedback', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setName('');
				setEmail('');
				setMessage('');
				setButtonText('✅');
			} else {
				setButtonText('❌');
			}
		} catch (error) {
			console.error('Error send form data:', error);
		}
	};

	return (
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
	);
};

export default FeedbackForm;

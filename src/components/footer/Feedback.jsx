import { useTranslation } from 'next-i18next';
import { useRef, useState } from 'react';
import s from './Feedback.module.scss';

const Feedback = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const { t } = useTranslation('common');
	const buttonRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
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
				buttonRef.current.textContent = '✅';

				setTimeout(() => {
					buttonRef.current.textContent = t('form.button');
				}, 3000);
			}
		} catch (error) {
			console.error('Error send contact data:', error);
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
				<button ref={buttonRef} type='submit' className={s.submit}>
					{t('form.button')}
				</button>
			</form>
		</div>
	);
};

export default Feedback;

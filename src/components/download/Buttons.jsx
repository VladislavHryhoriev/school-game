import s from './Buttons.module.scss';
import { useTranslation } from 'next-i18next';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	const { t } = useTranslation('common');

	return (
		<div className={s.buttons}>
			<div className={s.wrapper}>
				<button
					className={`${s.btn} ${s.free} ${isPremium ? '' : s.active}`}
					onClick={() => setIsPremium(false)}>
					{t('download.buttons.free')}
				</button>
				<button
					className={`${s.btn} ${s.premium} ${isPremium ? s.active : ''}`}
					onClick={() => setIsPremium(true)}>
					{t('download.buttons.premium')}
				</button>
			</div>
			{isPremium ? (
				<form className={s.emailForm}>
					<input
						className={s.email}
						type='email'
						name='email'
						placeholder={t('download.placeholder')}
					/>
					<button className={s.send}>{t('download.buttons.get')}</button>
				</form>
			) : (
				<button className={s.download} onClick={() => setShowModal(true)}>
					{t('download.buttons.download')}
				</button>
			)}
		</div>
	);
};

export default Buttons;

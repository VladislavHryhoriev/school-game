import s from './Buttons.module.scss';

const Buttons = ({ isPremium, setIsPremium, setShowModal }) => {
	return (
		<div className={s.buttons}>
			<div className={s.wrapper}>
				<button
					className={`${s.btn} ${s.free} ${isPremium ? '' : s.active}`}
					onClick={() => setIsPremium(false)}>
					Бесплатная версия
				</button>
				<button
					className={`${s.btn} ${s.premium} ${isPremium ? s.active : ''}`}
					onClick={() => setIsPremium(true)}>
					Премиум версия
				</button>
			</div>
			{isPremium ? (
				<form className={s.emailForm}>
					<input className={s.email} type='email' name='email' placeholder='Введите вашу почту' />
					<button className={s.send}>Получить</button>
				</form>
			) : (
				<button className={s.download} onClick={() => setShowModal(true)}>
					Скачать
				</button>
			)}
		</div>
	);
};

export default Buttons;

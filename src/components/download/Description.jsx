import { useState } from 'react';
import Modal from '../modal/Modal';
import s from './Description.module.scss';
import VersionBox from './VersionBox';
import Freemium from './Freemium';

const Description = ({ isPremium, setIsPremium }) => {
	const [showModal, setShowModal] = useState(false);

	const free = {
		title: 'Бесплатная версия',
		text: 'В бесплатной версии вам будет доступно ванильное прохождение включающее все сложности игры которые вам придется преодолеть и своими усилиями добиться желаемых результатов или концовок, а также доступны некоторые бесплатные - секретные коды для активации.',
	};

	const premium = {
		title: 'Премиум версия',
		text: 'В премиальной версии ваш функционал будет расширен: будет добавлена возможность проходить игру в Lite-режиме (настраиваемая стоимость энергии и средней цены за предметы), а так же откроется доступ к чит меню в котором при желании можно облегчить свое прохождение различными способами от выдачи денег и энергии до улучшения уровня доверия и дружбы с персонажами, созданию собственных ивентов с RNPS и многое другое включая ранний доступ к новейшей версии.',
	};

	return (
		<div className={s.description}>
			{isPremium ? (
				<Freemium title={premium.title} text={premium.text} />
			) : (
				<Freemium title={free.title} text={free.text} />
			)}
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
			<Modal active={showModal} setActive={setShowModal}>
				<div className={s.modalWrapper}>
					<h3 className={s.title}>Выберите версию</h3>
					<ul className={s.versions}>
						<VersionBox v='0.941' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.940' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.939' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.938' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.937' showModal={showModal} setShowModal={setShowModal} />
						<VersionBox v='0.936' showModal={showModal} setShowModal={setShowModal} />
					</ul>
				</div>
			</Modal>
		</div>
	);
};

export default Description;

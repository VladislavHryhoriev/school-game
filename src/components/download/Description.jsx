import Image from 'next/image';
import { useState } from 'react';
import Modal from '../modal/Modal';
import Buttons from './Buttons';
import s from './Description.module.scss';
import Freemium from './Freemium';
import VersionBox from './VersionBox';

const Description = ({ isPremium, setIsPremium }) => {
	const [showModal, setShowModal] = useState(false);

	const free = {
		title: 'Бесплатная версия',
		text: 'В бесплатной версии вам будет доступно ванильное прохождение включающее все сложности игры которые вам придется преодолеть и своими усилиями добиться желаемых результатов или концовок, а также доступны некоторые бесплатные - секретные коды для активации.',
		imageUrl: '/assets/[imgFree].webp',
	};

	const premium = {
		title: 'Премиум версия',
		text: 'В премиальной версии ваш функционал будет расширен: будет добавлена возможность проходить игру в Lite-режиме (настраиваемая стоимость энергии и средней цены за предметы), а так же откроется доступ к чит меню в котором при желании можно облегчить свое прохождение различными способами от выдачи денег и энергии до улучшения уровня доверия и дружбы с персонажами, созданию собственных ивентов с RNPS и многое другое включая ранний доступ к новейшей версии.',
		imageUrl: '/assets/[imgPremium].webp',
	};

	return (
		<div className={s.description}>
			{isPremium ? (
				<Freemium title={premium.title} text={premium.text} />
			) : (
				<Freemium title={free.title} text={free.text} />
			)}
			<div className={s.imageBox}>
				<Image
					className={s.image}
					src={isPremium ? premium.imageUrl : free.imageUrl}
					width={300}
					height={200}
					alt='image'
				/>
			</div>
			<Buttons isPremium={isPremium} setIsPremium={setIsPremium} setShowModal={setShowModal} />
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

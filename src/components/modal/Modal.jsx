import cn from 'classnames';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

const Modal = ({ openModal, setOpenModal, children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!openModal) return undefined;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [openModal]);

	if (!mounted) return null;

	return createPortal(
		<div
			className={cn(s.modal, { [s.active]: openModal })}
			onClick={() => setOpenModal(false)}>
			<div
				className={cn(s.modalContainer, { [s.active]: openModal })}
				onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default Modal;

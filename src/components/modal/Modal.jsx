import cn from 'classnames';
import s from './Modal.module.scss';

const Modal = ({ openModal, setOpenModal, children }) => {
	return (
		<div
			className={cn(s.modal, { [s.active]: openModal })}
			onClick={() => setOpenModal(false)}>
			<div
				className={cn(s.modalContainer, { [s.active]: openModal })}
				onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;

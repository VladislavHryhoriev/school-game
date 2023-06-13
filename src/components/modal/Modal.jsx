import s from './Modal.module.scss';

const Modal = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
			onClick={() => setActive(false)}>
			<div
				className={
					active ? `${s.modalContainer} ${s.active}` : `${s.modalContainer}`
				}
				onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;

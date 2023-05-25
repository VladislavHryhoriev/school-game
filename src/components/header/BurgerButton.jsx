import Image from 'next/image';
/// import style from Header
import s from './Header.module.scss';

const BurgerButton = ({ isActive, setIsActive }) => {
	return (
		<button className={`${s.burgerButton} ${s.showBurger}`} onClick={() => setIsActive(!isActive)}>
			<Image
				className={`${s.burgerIcon} ${!isActive ? s.iconActive : ''}`}
				src={'/icons/burger.svg'}
				width={40}
				height={40}
				alt='icon-burger'
			/>
			<Image
				className={`${s.burgerIcon} ${isActive ? s.iconActive : ''}`}
				src={'/icons/burger-close.svg'}
				width={40}
				height={40}
				alt='icon-burger'
			/>
		</button>
	);
};

export default BurgerButton;

import Image from 'next/image';
import s from './BurgerButton.module.scss';
import cn from 'classnames';

const BurgerButton = ({ isActive, setIsActive }) => {
	return (
		<button
			className={cn(s.burgerButton, s.showBurger)}
			onClick={() => setIsActive(!isActive)}>
			<Image
				className={cn(s.burgerIcon, { [s.iconActive]: !isActive })}
				src={'/icons/burger.svg'}
				width={40}
				height={40}
				alt='icon-burger'
			/>
			<Image
				className={cn(s.burgerIcon, { [s.iconActive]: isActive })}
				src={'/icons/burger-close.svg'}
				width={40}
				height={40}
				alt='icon-burger'
			/>
		</button>
	);
};

export default BurgerButton;

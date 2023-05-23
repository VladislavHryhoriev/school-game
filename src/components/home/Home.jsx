import Description from './Description';
import s from './Home.module.scss';
import Widget from '../widget/Widget';

const Home = () => {
	return (
		<main className={s.home}>
			<div className='container'>
				<div className={s.inner}>
					<Description />
					<Widget />
				</div>
			</div>
		</main>
	);
};

export default Home;

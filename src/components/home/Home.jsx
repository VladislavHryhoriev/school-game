import Description from './Description';
import Features from './Features';
import Hero from './Hero';
import s from './Home.module.scss';
import Widget from '../widget/Widget';

const Home = () => {
	return (
		<main className={s.home}>
			<Hero />
			<section className={s.story}>
				<div className='container'>
					<div className={s.inner}>
						<Description />
						<Widget />
					</div>
				</div>
			</section>
			<Features />
		</main>
	);
};

export default Home;

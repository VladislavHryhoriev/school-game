import Dropdown from '@/components/dropdown/Dropdown';
import { versions } from '@/data/versions';
import s from '@/styles/pages/changelog.module.scss';

export default function Changelog() {
	return (
		<main className={s.changelog}>
			<div className='container'>
				<div className={s.inner}>
					<div className={s.menu}>
						{versions.map((version) => (
							<Dropdown key={version.id} {...version} />
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

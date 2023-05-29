import s from './TextBox.module.scss';
import { useTranslation } from 'next-i18next';

const TextBox = () => {
	const { t } = useTranslation('common');
	return (
		<div className={s.textBox}>
			<p className={s.text}>{t('home.text.1')}</p>
			<p className={s.text}>{t('home.text.2')}</p>
			<p className={s.text}>{t('home.text.3')}</p>
		</div>
	);
};

export default TextBox;

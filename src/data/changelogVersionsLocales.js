// Нужно импортировать файлы локалей RU и EN
import { v0936en } from './changelogVersionLocales/en/v0936en';
import { v0936ru } from './changelogVersionLocales/ru/v0936ru';
import { v0937en } from './changelogVersionLocales/en/v0937en';
import { v0937ru } from './changelogVersionLocales/ru/v0937ru';
import { v0938en } from './changelogVersionLocales/en/v0938en';
import { v0938ru } from './changelogVersionLocales/ru/v0938ru';
import { v0939en } from './changelogVersionLocales/en/v0939en';
import { v0939ru } from './changelogVersionLocales/ru/v0939ru';
import { v0940en } from './changelogVersionLocales/en/v0940en';
import { v0940ru } from './changelogVersionLocales/ru/v0940ru';
import { v0941en } from './changelogVersionLocales/en/v0941en';
import { v0941ru } from './changelogVersionLocales/ru/v0941ru';
import { v0942en } from './changelogVersionLocales/en/v0942en';
import { v0942ru } from './changelogVersionLocales/ru/v0942ru';
// import { vRU } from './changelogVersionLocales/ru/placeholderRU';
// import { vEN } from './changelogVersionLocales/en/placeholderEN';

export const changelogVersionsLocale = {
	// В конце импортируешь файл с RU текстом. Пример [..., v0943ru]
	ru: [
		v0936ru,
		v0937ru,
		v0938ru,
		v0939ru,
		v0940ru,
		v0941ru,
		v0942ru,
		// vRU,
	].reverse(),
	// В конце импортируешь файл с EN текстом. Пример [..., v0943en]
	en: [
		v0936en,
		v0937en,
		v0938en,
		v0939en,
		v0940en,
		v0941en,
		v0942en,
		// vEN,
	].reverse(),
};

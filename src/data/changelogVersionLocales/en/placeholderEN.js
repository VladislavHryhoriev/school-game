import { v4 } from 'uuid';

// Вместо v вставляешь версию просто меняя цифры. Пример: v0943en
export const vEN = {
	id: v4(),
	title: '', // Текст на кнопке раскрывающего списка. Пример: title: '0.943',
	content: {
		new: `
			— (EN) Update list...
		`,
		bugfix: `
			— (EN) Bugfix list...
		`,
	},
};

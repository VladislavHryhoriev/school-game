import { v4 } from 'uuid';

export const v0942en = {
	id: v4(),
	title: '0.942',
	content: {
		new: `
			— Changed and reworked certain events with Yuki Oota to the current standards: now you can play the character of your character through multiple choices. If before that you did not like his character, prescribed at the very beginning, now you can safely move away from him and play something else. At the moment, the structure of events with her is similar in terms of elections to the structure of the initial events with Ayano Yoshida.
			— Changed and reworked certain events with Ayano Yoshida to the current standards: now you can play the character of your character through multiple choices. If before that you did not like his character, prescribed at the very beginning, now you can safely move away from him and play something else.
			— A new 18+ pose has been added for randomized female NPCs - Side Sex Pose. Accordingly, a new scene was drawn for her.
			— The system of some location interactions with the main character's room has been changed: two location interactions have been removed from the location, including showering and cooking. These two interactions have been moved to new room sub-locations: the bathroom and the kitchen.
			— A new storyline has been added with a new character - the god Barneybald. His events can be done with a low chance if your character is in his apartment.
			— Added a new function during the start - "Always do not skip the mini-game".
			— Now randomized NPCs can try to rob your character, his apartment. Only the most courageous are capable of this, as well as those who need money / who have been interfered with by your character in any way.
			— Added new events with randomized NPCs that drop randomly.
			— A new basic hairstyle has been added to your character editor and is available to choose from. With it, your character becomes bald. In addition, he can now also become bald with the help of a beauty salon - a new function has been added there that allows you to change your hairstyle to zero.
			— A minor refactoring of the function responsible for rendering and presenting the appearance of a randomized NPC was carried out: some unnecessary and rudimentary check functions were removed, the code itself was slightly edited for better performance and less visual scale.
			— A minor refactoring of the system responsible for creating/editing randomized NPCs was carried out: some flaws were fixed, some things that were rudimentary at this stage of development were removed.
			— The system responsible for the generation of randomized NPCs was refactored: the superfluous was removed, a new one was added that would fix possible generation errors, and also, in general, the code responsible for this part of the game was slightly improved.
			— Randomized male NPCs can now appear without hair. In addition, you can now set whether a randomized NPC will be bald or not in the RNPS editor, under the fifth base hairstyle.
			— The system responsible for the initial dot distribution of attributes in your character creation menu has been edited: instead of 50 points, available initial unallocated points have become 30. All attributes, except for luck, prestige and cunning, now give 2 attribute points for one unallocated point, and luck, authority and cunning is worth 8, 8, and 4 attribute points per unallocated attribute point, respectively.
			— A minor code refactoring was carried out regarding the cooking system: some systems were slightly changed, some game mechanics were fixed and improved.
			— The code was refactored regarding the interface of the occult club: some flaws associated with this moment of the game were fixed, and the very appearance of this very code was slightly improved.
			— The fear system has been reworked: now, at a certain level of relations, the character you are trying to intimidate / force to do something will still do it if the fear is above 900 or 1500 units. This includes intimidation, robbery and threats.
			— Added new event scenarios when a randomized NPC is feared high during some interactions. Including, if the RNPS has a high fear, and you invite him to meet, now he will agree to this with one hundred percent probability.
			— Added a new possible interaction with randomized male NPCs - suggest dating.
			— Added a new possible interaction with randomized male NPCs - suggest dating.
			— Added text to 18+ scenes with randomized NPCs to describe the process.
			— Now in sex scenes with randomized male NPCs, there is a choice of who you will be in this sexual relationship: active or passive
			— Added a new storyline related to randomized NPCs. To get it, you need to go to the beach, and it may fall out with some chance
			— Added new events with randomized female NPCs.
			— Added new events related to the story character Yoshida Ayano. These become available under certain conditions, as well as cohabitation with her.
			— Now the black color with RGB 000 and 000000 is not completely displayed on the clothes of randomized NPCs in case of changing the color of this very clothes
			— The branch with Robert the Cockroach has been replenished with new events that will drop out depending on the progress of your character in the plot/choices
			— Now, if your character has the maximum amount of reputation points in the grocery store, the window with the points needed for promotion will not be shown
			— Now 18+ scenes that don't have any text will in any case give a positive increase in relationship points with the randomized NPC that the scene happens to
			— Increased the amount of fear points required to leave the academy from 1000 to 3000.
			— The English translation of the file was improved, which contained more than 120,000 characters, as well as almost everything related to interactions and the interaction interface with randomized
			— Now, if a randomized NPC that has low courage, he will not come up with a scene of jealousy towards your character if he and your character have a relationship.
			— Intimidation, as well as a lot more aggressive interactions in general, now reduces the amount of bravery of the randomized NPC it was applied to
			— The background of the location "Beauty Salon" in the shopping center was completely changed and redrawn. In addition, now it has 3 options: day, night and morning.
			— The background of the "Kitchen" location was completely changed and redrawn, which was positioned in some events with Ayano, as well as Yuki Oota
			— Minor refactoring of the code that was responsible for the generation of randomized NPCs was carried out: the generation of the NPCs themselves was improved, as well as some points that required some attention were fixed and finalized
			— Minor refactoring of the code that was responsible for sex scenes with randomized NPCs was carried out: some ejaculation formulas were improved, CG miscalculations of the scene were edited and certain points that required attention were edited
			— The code that is responsible for defining scenes with randomized NPCs has been refactored: new details have been added, and layers that overlap each other have been edited to create an overall picture
			— The code responsible for managing the occult club was refactored: certain formulas were edited and tweaked, the mechanics themselves were improved
			— A minor refactoring of the code that is responsible for managing the journalism club was carried out: some shortcomings in training were fixed, some poorly working mechanics, as well as other things that required attention.
			— The code of the relationship system with randomized NPCs was refactored: the functions responsible for issuing relationship points for interactions were taken into account, some formulas for the success of these very interactions.
			— Added a new feature when defeating randomized NPCs in fights - the ability to shave the head of the defeated randomized NPC. This greatly reduces his courage level and also, as expected, removes the hair on his head.
			— Now after losing a fight with a randomized NPC, you can lose your hair if your character is completely unlucky.
			— A new option has been added to the beauty salon in the mall location - dye your hair. With it, you can change the color of your character's hair into something else.
			— A new item has been added to the online store - a trimmer. With it, you can shave the heads of randomized NPCs, as well as the head of your character.
			— Now, if your character has become bald, his new hairstyle will grow only after a while - after 30 days.
			— The system responsible for group activities of randomized NPCs has been slightly refactored: now there are no such problems due to which the perpetrator / victim is confused, there are no more problems associated with some other features of these systems. In addition, this system has been slightly improved in general.
			— Some locations have been slightly refactored: some location interactions/transitions have been sorted out, locations load faster, and lists containing randomized NPCs have been improved.
			— The system responsible for assembling sprites of randomized NPCs was refactored: the performance of this part of the game was slightly improved, some bugs and shortcomings were fixed, and the code itself was generally improved.
			— A complete refactoring of the system that is responsible for dropping events with randomized NPCs was carried out: the conditions of some events were revised, problems associated with the non-dropping of these same events were fixed, and in general, now the code of this system itself looks a little better than it was before.
			— The system that is responsible for initializing the data at the start of the game has been refactored: there are fewer errors associated with the omission of any variable, everything related to this system has been moved to one file, and also in general the problems associated with it all , has become much smaller.
			— The percentage in the bank has been reduced from the standard 5 percent to 2. It can still be increased with perks/skills.
			— A new feature has been added to the modding framework, with which you can create events with randomized NPCs without any crutches, using a simple function.
			— A new background has been added to the game - the background of the dressing rooms on the beaches, which is opened and shown in some events with randomized NPCs
			— Minor code refactoring was carried out, which is responsible for determining tips in the diary: now other variables react to the text, the notes themselves have become more understandable.
			— The system that is responsible for creating randomized NPCs has been refactored: some errors that come out with a certain chance have been fixed, and the performance of this system has been improved.
		`,
		bugfix: `
			— Исправлен баг, из-за которого могло выйти исключение во время некоторых ивентов с Сузуки Мацуи.
			— Исправлен баг, из-за которого все мужские рандомизированные НПС могли быть лысыми.
			— Исправлена недоработка, из-за которой количество духов в рюкзаке некорректно отображалось.
			— Исправлен баг, из-за которого выходили исключения во время использования некоторых функций в салоне красоты.
			— Исправлен баг, из-за которого, если во время игровой сессии начать рандомизировать игру и нажать в редакторе кнопку "Снять все", все рандомизированный НПС в игре были без одежды.
			— Исправлена недоработка, из-за которой мог работать перенос текста в меню взаимодействия с рандомизированными НПС, тем самым полностью ломая сам интерфейс.
			— Исправлена недоработка, из-за которой выходило исключение во время изменения языка игры во время игровой сессии (не из главного меню игры).
			— Исправлен баг, из-за которого выходило исключение во время использования локационного взаимодействия, связанного с фестивалем на локации академии.
			— Исправлена недоработка, из-за которой ивент с сопровождением рандомизированного НПС женского пола мог выпасть во время до учебных занятий и/или в любое другое время, но не после самих учебных занятий.
			— Исправлена недоработка, из-за которой пол рандомизированного НПС мог поменяться во время ивента по его сопровождению до дома.
			— Исправлен баг, из-за которого могло выйти исключение, когда вы заходили в меню взаимодействия с рандомизированными НПС.
			— Исправлен баг, из-за которого игра могла зависнуть в определенных момент на несколько секунд, а после выдать исключение во время игровой сессии.
			— Исправлена недоработка, из-за которой в некоторых ивентах, происходящих в квартире главного героя, могло не быть фона этой самой комнаты.
			— Исправлен баг, из-за которого мог случиться вылет во время воспроизведения некоторых ивентов в квартире главного персонажа.
			— Исправлена проблема с некоторыми неправильными и некорректными условиями выпадения ивентов с рандомизированными НПС на территории академии.
			— Исправлена недоработка, из-за которой могли не показываться варианты взаимодействий с РНПС под первым пунктом на английском переводе игры.
			— Исправлена недоработка, из-за которой в игре спавнилось на одного рандомизированного НПС меньше, чем нужно.
			— Исправлена недоработка, из-за который фоны с рандомизированными НПС не 18+ характера могли зависать на экране при некоторых случаях.
			— Исправлен баг, из-за которого выходило исключение в некоторых ивентах с Юки Оота.
			— Исправлен баг, из-за которого могло выйти исключение после начала новой игры с некоторым шансом на это.
			— Исправлен баг, из-за которого игра могла вылететь во время игровой сессии.
			— Исправлен баг, из-за которого игра могла начать подлагивать по прошествию определенного времени.
			— Исправлена недоработка, из-за которой некоторый интерфейс мог отображаться некорректно на английском переводе игры.
			— Исправлена проблема, из-за которой в некоторых случаях генерации рандомизированных НПС могла ломать игру.
			— Исправлен баг, из-за которого могло выйти исключение во время прохождения активностей рандомизированных НПС к рандомизированный НПС, касающихся их романтических взаимодействий.
			— Исправлена недоработка, из-за которой количество полученных денег за работу могло отображаться, как нецелочисленное число.
			— Исправлена недоработка, из-за которой чем больше ваш персонаж имел сексуального опыта, тем меньше он мог себя контролировать в сексуальных сценах, когда же должно было быть все наоборот. Кроме того, были незначительно исправлены имеющиеся формулы и подведены под нынешний игровой баланс.
			— Исправлена недоработка, из-за которой функция "Агитировать за Юки Оота" могла не отображаться в некоторых вкладках с рандомизированными НПС и при некоторых условиях.
			— Исправлен баг, из-за которого одежда могла быть бесцветной/сугубо черной у рандомизированных НПС женского пола в редакторе рандомизированных НПС.
			— Исправлен баг, из-за которого бегущая строка в главном меню могла резко прерывать весь текст на каком-то этапе его прокрутки.
			— Исправлена недоработка, из-за которой некоторые ивенты и взаимодействия могли не отображаться при игре на английском языке.
			— Исправлен баг, из-за которого в некоторых случаях 4 базисная прическа могла не иметь часть волос в задней части персонажа.
			— Исправлен баг, из-за которого могло выйти исключение во время игрового процесса из-за некоторых ошибок генерации рандомизированных НПС.
			— Исправлен баг, из-за которого некоторый игровой интерфейс мог некорректно отображаться в некоторых случаях/ситуациях.
			— Исправлена недоработка, из-за которого на некоторых особо слабых устройствах игра могла вылетать через некоторое время.
			— Исправлен баг, из-за которого могло выйти исключение при выборе некоторых комбинаций особенностей внешности/костюмов и других вещей, связанных с редактором РНПС.
			— Исправлена недоработка, из-за которой рандомизированные НПС могли заниматься не той локационной активностью, которой должны заниматься в локации, в которой они находятся.
			— Исправлен баг, из-за которого в некоторых моментах сюжета тот мог приводить к некорректным записям в дневнике вашего персонажа, дезинформируя и давая неточную информацию.
			— Исправлен баг, из-за которого посреди игровой сессии рандомизированный НПС мог поменяться свою внешность без каких-либо предпосылок.
			— Исправлена недоработка, из-за которой некоторые показатели в дневнике могли некорректно отображаться, в дробных значениях.
			— Исправлен баг, из-за которого могло выйти исключение во время игрового процесса при некоторых условиях генерации/проблемах в игровом процессе.
			— Исправлена проблема, из-за которой рандомизированные НПС могли менять в цвете своей одежды в самый ненужный для этого и неподходящий момент.
			— Исправлен баг, из-за которого игра могла вылетать через некоторое время на особо старых устройствах.
			— Исправлена недоработка, из-за которой игра могла в некоторых моментах слишком долго отвечать на клики/очень долго открываться какое-либо меню, а также в целом некорректно себя вести на некоторых особо слабых устройствах.
			— Исправлен баг, из-за которого могло выдаться некорректное значение очков отношений/привязанности/страха с рандомизированными НПС во время определенных взаимодействий.
			— Исправлен баг, из-за которого могло выйти исключение при использовании некоторых взаимодействий с рандомизированными НПС.
			— Исправлен баг, из-за которого могло выйти исключение во время воспроизведения каких-либо ивентов с рандомизированными НПС.
			Исправлен баг, из-за которого могло показываться некорректные очки отношений во время приглашения рандомизированного НПС женского пола к себе домой.
			— Исправлен баг, из-за которого которого к вашему персонажу в гости мог прийти не тот рандомизированный НПС, который должен был прийти.
			— Исправлен недоработка, из-за которого в некоторых ивентах с рандомизированными НПС могло сниматься/добавляться некорректное количество атрибутов вашему персонажу.
			— Исправлена недоработка, из-за которой в некоторых игровых моментах могло показываться некорректное значение атрибутов вашего персонажа.
			— Исправлена недоработка, из-за которой текстуры рандомизированных НПС могли в некоторых моментах игры отображаться некорректно на некоторых устройствах.
			— Исправлена недоработка, из-за которой текстуры набора одежды «Кофта и юбка» могла работать некорректно. Кроме того, теперь на этот набор одежды вообще не работает какое-либо накладывание текстуры/цвета из-за некорректной работоспособности.
			— Исправлена недоработка, из-за которой третья базовая прическа в редакторе главного персонажа могла некорректно отображаться при смене прически.
			— Исправлен баг, из-за которого могло выйти исключение, если начать заниматься сексом с рандомизированными НПС женского пола.
			— Исправлена недоработка, из-за которой кнопки локационных взаимодействий в локации «Спортивный зал» одновременно высвечивались при их наведении.
			— Исправлен баг, из-за которого некоторые ивенты с рандомизированными НПС могли воспроизводиться с НПС мужского пола, а не женского, даже если изначальный ивент предполагал обратное.
			— Исправлен баг, из-за которого могли пропадать некоторые возможности редактирования рандомизированных НПС в редакторе при некоторых предварительных взаимодействиях с ним.
			— Исправлена недоработка, связанная с некорректным отображением внешности некоторых рандомизированных НПС в игровой сессии.
			— Исправлена недоработка, из-за которой ивенты с Робертом-Фон-Тараканиусом могли выпасть, даже если ваш персонаж не имел с ним дружественных отношений с самого начала.
			— Исправлена недоработка, из-за которой в сценах лапания груди/ягодиц рандомизированных женских НПС у таковых могла присутствовать одежда в моментах, когда ее не должно было быть.
			— Исправлена недоработка, связанная с моментом, при котором у рандомизированного НПС могла быть одежда в меню активность, когда таковая должна была отсутствовать.
			— Исправлен баг, из-за которого могло выйти исключение из-за некоторых систем управления клубом оккультизма во время игровых сессий.
			— Исправлен баг, из-за которого в списке возможных для импорта академий могли находиться лишние файлы.
			— Исправлены некоторые опечатки, произведенные в начальном сюжете.
			— Исправлена недоработка, из-за которой в некоторых интерфейсах могли отображаться функции уже удаленных механик/систем.
			— Исправлен баг, из-за которого могло выйти исключение во время попытки пожертвования денег в бюджет академии.
			— Исправлен баг, из-за которого могло выйти исключение в комнате игрока при некоторых внутриигровых условиях.
			— Исправлен баг, из-за которого ваш персонаж мог быть обнаженным, если вы до этого редактировали рандомизированных НПС и нажимали кнопку «Снять все».
			— Исправлен баг, из-за которого ивенты с рандомизированными НПС могли выпадать не в тех локациях, в которых должны выпадать.
			— Исправлена недоработка, из-за которой, если ваш персонаж ломал персонажа мужского пола, текст о нем говорил все равно, как о девушке.
			— Исправлен баг, из-за которого после нажатия Shift+Alt+F12/F9/F10 не повышались показатели привязанности/любви/страха у рандомизированных НПС к вашему персонажу.
			— Исправлена недоработка, при которой рандомизированные НПС в определенных моментах игрового процесса могли выбирать неправильную активность/обращение к главному герою.
		`,
	},
};

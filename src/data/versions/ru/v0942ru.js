import { v4 } from 'uuid';

export const v0942ru = {
	id: v4(),
	title: '0.942',
	content: {
		new: `
			— Изменены и переработаны определенные ивенты с Юки Оота под нынешние стандарты: теперь вы сможете отыгрывать характер своего персонажа с помощью многочисленных выборов. Если до этого вам не нравился его характер, прописанный в самом начале, то теперь можно спокойно отойти от него и отыгрывать что-то другое. На данный момент структура ивентов с ней похожа по выборам на структуру начальных ивентов с Аяно Ёшида.
			— Для рандомизированных НПС женского пола была добавлена новая 18+ поза - поза секса сбоку. Соответственно, для нее же была нарисована новая сцена.
			— Изменены и переработаны определенные ивенты с Аяно Ёшида под нынешние стандарты: теперь вы сможете отыгрывать характер своего персонажа с помощью многочисленных выборов. Если до этого вам не нравился его характер, прописанный в самом начале, то теперь можно спокойно отойти от него и отыгрывать что-то другое.
			— Была изменена система некоторых локационных взаимодействий с комнатой главного героя: удалены два локационных взаимодействия из локации, среди которых прием душа и приготовление продуктов. Эти два взаимодействия были перенесены в новые подлокации комнаты: ванную комнату и кухню.
			— Была добавлена новая сюжетная линия с новым персонажем - богом Барниболдом. Его ивенты могут производиться с низким шансом, если ваш персонаж находится у себя в квартире.
			— Добавлена новая функция во время начала работы - "Всегда не пропускать мини-игру".
			— Теперь рандомизированные НПС могут попытаться ограбить вашего персонажа, его квартиру. На это способны лишь самые смелые, а также те, кто нуждается в деньгах/кому как-либо помешал ваш персонаж.
			— Добавлены новые ивенты с рандомизированными НПС, выпадающие в случайном порядке.
			— Добавлена новая возможность во время победы в драках над рандомизированными НПС - возможность побрить налысо побежденного рандомизированного НПС. Это значительно снижает его уровень смелости, а также, как и полагается, убирает волосы на его голове.
			— Теперь после проигрыша в драке с рандомизированным НПС вы можете потерять свои волосы, если вашему персонажу совсем уж не повезет.
			— В салон красоты в локации торгового центра была добавлена новая возможность - покрасить волосы. С помощью нее вы сможете перекрасить цвет волос вашего персонажа в что-то другое.
			— Добавлен новый предмет в интернет-магазин - триммер. С его помощью можно брить головы рандомизированных НПС, а также голову своего персонажа.
			— В редактор вашего персонажа была добавлена новая базисная прическа, доступная на выбор. При ней ваш персонаж становится лысым. Кроме того, лысым он теперь может стать также и с помощью салона красоты - туда была добавлена новая функция, позволяющая сменить прическу под нолик.
			— Был проведен рефакторинг кода, касающийся интерфейса клуба оккультизма: исправлены некоторые недоработки, связанные с этим моментом игры, а также немного улучшен сам вид этого самого кода.
			— Переработана система страха: теперь при определенном уровне отношений персонаж, которого вы пытаетесь запугивать/заставить что-то сделает, все равно это сделает при страхе выше 900 или 1500 единиц. Сюда входят запугивания, грабежи и угрозы.
			— Добавлены новые варианты развития события при высоком уровне страха рандомизированного НПС во время некоторых взаимодействий. В том числе, если у РНПС высокий страх, а вы ему предлагаете встречаться, теперь он согласится на это со стопроцентной вероятностью.
			— Добавлено новое возможное взаимодействие с рандомизированными НПС мужского пола - предложить встречаться.
			— В 18+ сцены с рандомизированными НПС добавлен текст, описывающий процесс.
			— Теперь в сексуальных сценах с рандомизированными НПС мужского пола есть выбор того, кем вы будете в этих сексуальных отношениях: активным или пассивным.
			— Добавлена новая сюжетная ветка, связанная с рандомизированными НПС. Чтобы ее получить, нужно пройти на пляж, и она с некоторым шансом может выпасть.
			— Добавлены новые ивенты с рандомизированными НПС женского пола.
			— Добавлены новые ивенты, касающиеся сюжетного персонажа Ёшида Аяно. Таковые становятся доступными при некоторых условиях, а также при сожительстве с ней.
			— Теперь черный цвет с RGB 000 и 000000 полностью не отображается на одежде рандомизированных НПС в случае смены цвета этой самой одежды.
			— Ветка с Робертом-фон-Тараканиусом была пополнена новыми ивентами, которые будут выпадать в зависимости от продвижения вашего персонажа в сюжете/его выборах.
			— Теперь, если у вашего персонажа максимальное количество очков репутации в продуктовом магазине, окно с очками, нужными для повышения, не будет показываться.
			— Теперь 18+ сцены, не имеющие какого-либо текста, в любом случае дают положительный прирост к очкам отношений с рандомизированным НПС, с которым происходит эта сцена.
			— Увеличено количество требуемых для ухода с академии очков страха с 1000 единиц до 3000 единиц.
			— Был улучшен перевод на английский язык файла npc_main.rpy, который содержал более 120.000 символов, а также практически все, что касается взаимодействий и интерфейса взаимодействия с рандомизированными НПС.
			— Теперь, если у рандомизированного НПС, у которого низкая смелость, он не подойдет со сценой ревности к вашему персонажу, если он и ваш персонаж имеете отношения.
			— Теперь запугивания, а также в целом куда больше агрессивных взаимодействий снижает количество смелости у рандомизированного НПС, к которому было это применено.
			— Был полностью изменен и перерисован фон локации «Салон красоты» в торговом центре. Кроме того, теперь он имеет 3 варианта: день, ночь и утро.
			— Был полностью изменен и перерисован фон локации «Кухня», который позиционировался в некоторых ивентах с Аяно, а также Юки Оота.
			— Был проведен незначительный рефакторинг кода, который отвечал за генерацию рандомизированных НПС: улучшена генерация самих НПС, а также исправлены и доработаны некоторые моменты, требовавшие к себе определенного внимания.
			— Был проведен незначительный рефакторинг кода, который отвечал за сексуальные сцены с рандомизированными НПС: улучшены некоторые формулы эякуляции, просчеты CG сцены и подредактированы определенные моменты, требовавшие внимания к себе.
			— Был проведен рефакторинг кода, который отвечает за определение сцен с рандомизированными НПС: добавлены новые детали, а также отредактированы слои, накладывающиеся друг на друга для создания общей картинки.
			— Был проведен рефакторинг кода, который отвечает за управление клуба оккультизмом: отредактированы и подправлены определенные формулы, улучшена сама механика.
			— Был проведен незначительный рефакторинг кода, который отвечает за управление клубом журналистики: исправлены некоторые недоработки в обучении, некоторые слабо работающие механики и системы, а также другие вещи, требовавшие к себе внимания.
			— Был проведен рефакторинг кода системы отношений с рандомизированными НПС: во внимания были взяты функции, отвечающие за выдачу очков отношений за взаимодействия, некоторые формулы успеха этих самых взаимодействий.
			— Был проведен незначительный рефакторинг кода, касающийся системы приготовления еды: были незначительны изменены некоторые системы, исправлены и доработаны некоторые механики игры.
			— Была отредактирована система, отвечающая за начальное точечное распределение атрибутов в меню создания вашего персонажа: доступных начальных нераспределенных очков вместо 50 единиц стало 30. Все атрибуты, кроме удачи, авторитета и хитроумия теперь за одно нераспределенное очко дают 2 очка атрибутов, а удача, авторитет и хитроумие дают 8, 8 и 4 очка атрибута за одно нераспределенное очко соответственно.
			— Теперь рандомизированные НПС мужского пола могут появиться без волос. Кроме того, настроить будет ли лысым рандомизированный НПС или нет теперь можно в редакторе РНПС, под пятой базовой прической.
			— Был проведен рефакторинг системы, отвечающей за генерацию рандомизированных НПС: убрано лишнее, добавлено новое, что исправит возможные ошибки генерации, а также в общем и в целом незначительно улучшен сам код, отвечающий за эту часть игры.
			— Был проведен незначительный рефакторинг системы, отвечающей за создание/редактирование рандомизированных НПС: были исправлены некоторые недоработки, убраны некоторые рудиментарные на данном этапе разработки вещи.
			— Был проведен незначительный рефакторинг функции, отвечающей за просчет и презентования внешности рандомизированного НПС: были удалены некоторые лишние и рудиментарные проверочные функции, немного отредактирован сам код для более лучшего быстродействия и меньшей визуальной масштабности.
			— Теперь, если ваш персонаж стал лысым, новая прическа у него отрастет лишь через время - через 30 дней.
			— Был проведен незначительный рефакторинг системы, отвечающей за групповые активности рандомизированных НПС: теперь нет таких проблем, из-за которых путается виновник/жертва, больше нет проблем, связанных с некоторыми другими особенностями этих систем. Кроме того, в целом была немного улучшена эта система.
			— Был проведен незначительный рефакторинг некоторых локаций: были отсортированы некоторые локационные взаимодействия/переходы, ускорена загрузка локаций, а также улучшены списки, содержащие в себе рандомизированных НПС.
			— Был проведен рефакторинг системы, отвечающей за сборку спрайтов рандомизированных НПС: была незначительно улучшена производительность этой части игры, исправлены некоторые баги и недоработки, а также в целом улучшен сам код.
			— Был проведен полный рефакторинг системы, которая отвечает за выпадения ивентов с рандомизированными НПС: были пересмотрены условия некоторых ивентов, исправлены проблемы, связанные с невыпадением этих самых ивентов, а также в целом теперь сам код этой системы выглядит немного лучше, чем было до этого.
			— Был проведен рефакторинг системы, которая отвечает за инициализацию данных при запуске игры: стало меньше ошибок, связанных с пропуском какой-либо переменной, все, что связано с этой системой, было перемещено в один файл, в также в целом проблем, связанных с этим всем, стало гораздо меньше.
			— Был снижен процент в банке со стандартных 5 процентов до 2. Его все еще можно повышать с помощью перков/навыков.
			— Во фреймворк для создания модификаций была добавлена новая возможность, с помощью которой можно создать ивенты с рандомизированными НПС без каких-либо костылей, с помощью простой функции.
			— В игру был добавлен новый фон - фон раздевалок на пляжах, который открывается и показывается в некоторых ивентах с рандомизированными НПС.
			— Был проведен незначительный рефакторинг кода, который отвечает за определение подсказок в дневнике: теперь на текст реагируют другие переменные, сами заметки стали более понятными.
			— Был проведен рефакторинг системы, которая отвечает за создания рандомизированных НПС: исправлены некоторые ошибки, выходящие с некоторым шансом, улучшена работоспособность этой системы.
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
		— Исправлен баг, из-за которого могло показываться некорректные очки отношений во время приглашения рандомизированного НПС женского пола к себе домой.
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

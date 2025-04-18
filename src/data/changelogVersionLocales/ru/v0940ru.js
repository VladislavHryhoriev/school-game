import { v4 } from 'uuid';

export const v0940ru = {
	id: v4(),
	title: '0.940',
	content: {
		new: `
			— Была добавлена новая небольшая сюжетная линия для персонажа Аяно Ёшида. Выпадает она случайным образом после определенного прогресса в сюжете. Кроме того, добавлены разные мини-ивенты, касающиеся данного персонажа напрямую.
			— Были добавлены новые ивенты, касающиеся Мейко Тсукаса. С помощью них можно перейти с романтической ветки в ветку шантажа, они немного больше рассказывают о самом персонаже, а также имеют определенные выборы, позволяющие отыгрывать характер вашего персонажа.
			— Была видоизменена сюжетная линия Сузуки Мацуи: добавлен новый ивент в ее сюжетную линию, изменены и доработаны подсказки в дневнике, касающиеся ее сюжетной линии, а также в некоторых местах в уже существующих ивентах изменен текст.
			— Был полностью видоизменен и доработан интерфейс главного меню игры: оно стало более презентабельным, в нем появилось множество анимаций и дополнительных возможностей, как бегающая строка с игровыми подсказками, всплывающие диалоговые окна, а также другие вещи, дополняющие все это меню в общем и в целом.
			— Теперь ваш персонаж имеет разное телосложение в зависимости от его показателей физических атрибутов: он может быть толстым, худым, среднего веса или же коренастым. Кроме того, теперь у него не может быть старое типовое тело. Теперь он имеет только новое типовое тело на постоянной основе.
			— Добавлен новый возможный питомец/сожитель для вашего персонажа - Роберт фон-Тараканиус. В случае правильных выборов в одном из ивентов, он появится у вашего персонажа дома и будет помогать ему. К счастью, его всегда можно будет выгнать определенными приспособлениями, съесть в голодные времена или начать игнорировать, отчего он может уйти.
			— Добавлена новая категория ивентов, связанных с жильем вашего персонажа: теперь ваш персонаж будет испытывать разные проблемы, касающиеся этого элемента игры. К примеру, с некоторым шансом могут прорвать трубы в квартире, курьер может ошибиться адресом в доставке: каждый ивент вызывает не только проблемы, но также и дает вашему персонажу небольшие баффы к атрибутам, определенной статистике и другим элементам игры. Кроме того, интервал их выпадения поставлен, как один внутриигровой месяц, отчего таковые ивенты не будут казаться рутинными.
			— В существующий интерфейс в некоторые места были добавлены анимации и другие вещи, позволяющие сделать его более живым и интересным.
			— Немного переделаны сюжетные ивенты с Сузуки Мацуи: были видоизменены начальные диалоги, добавлены новые выборы, влияющие на ход сюжета, удалены некоторые старые выборы, а также в целом теперь сюжетная линии выглядит немного лучше.
			— Изменены и переработаны некоторые новые ивенты с Аяно Ёшида под нынешние стандарты: теперь вы сможете отыгрывать характер своего персонажа с помощью многочисленных выборов. Если до этого вам не нравился его характер, прописанный в самом начале, то теперь можно спокойно отойти от него и отыгрывать что-то другое.
			— Добавлена новая функция в редактор рандомизированных НПС: перекраска в любой цвет существующие наборы одежды. Осуществляется это с помощью ввода RGB кода в соответствующую вкладку в редакторе. Вся одежда разделена на нижнюю часть и верхнюю, что увеличит количество доступных вариантов и простор для фантазии. Доступно это на данный момент только для рандомизированных женских НПС, а также для патреон подписчиков, у которых подписка выше или равняется уровню Best Friend ($10), на время, до окончания тестирования этой функции.
			— Теперь определенные наборы одежды генерируются в разных расцветках: таковых более десятка штук, все они подбираются в зависимости от типажа рандомизированного НПС девушки и других факторов.
			— Добавлены новые ивенты, которые касаются направления повседневных ивентов, выпадающих в квартире.
			— Добавлены новые локационные ивенты, добавляющие трудности прохождения: каждый из по-своему влияет на вашего персонажа. Выпавший ивент может как улучшить атрибут вашего персонажа, так и уменьшить его. Само же выпадение крайне неудачливых ивентов, добавляющих трудности, зависит от показателя удачи вашего персонажа.
			— Была добавлена новая локация, доступная для посещения - спортивный зал. Для его посещения нужно купить там же абонемент, а само его посещение дает больше возможностей для прокачки физических атрибутов вашего персонажа.
			— Был проведен незначительный рефакторинг внутриигровой карты, что избавит от некоторых проблем, связанных с ней, а также ускорит создание контента, связанного с локациями, в дальнейшем.
			— Был проведен незначительный рефакторинг системы распределения рандомизированных НПС по локациям: их передвижения стали чуть более логичными, а локации, которые до этого они могли игнорировать, стали более посещаемыми.
			— Был проведен рефакторинг, касающийся системы просчета количества достижений: теперь все работает гораздо стабильнее, сами расчеты стали проводиться в отдельной функции, а код стал более понятным.
			— Теперь гораздо больше локационных действий влияют на взаимоотношения вашего персонажа и рандомизированного НПС.
			— Добавлены новые мини-ивенты, связанные с рандомизированными НПС, а также были незначительно отредактированы уже имеющиеся в игре ивенты такого типа.
			— Незначительно отредактирован модуль, отвечающий за распределение одежды на рандомизированных НПС: сам выбор обосновывается теперь больше на их личных предпочтениях, взаимоотношениях с другими РНПС, а также некоторых других факторах.
			— Был проведен незначительный рефакторинг, касающийся системы модификатора отношений: были добавлены максимальные и минимальные границы, исправлены некоторые ошибки и недоработки в просчетах.
			— В некоторые ивенты с рандомизированными НПС добавлено больше условий для выпадения: некоторые из них теперь не будут выпадать, пока ваш персонаж не получит нужного уровня популярности/не дойдет до определенного сюжетного момента.
			— Исправлен баг, который выходил, если пожертвовать деньги академии, отчего добавлялся новый ученик и новое исключение после перемотки времени.
			— Удалены некоторые незначительные функции и возможности, которые могли вызывать баги и проблемы с отображением внешности рандомизированных НПС на экране.
			— Удалена вкладка с особенностями внешности из дневника главного героя из-за ненадобности и рудиментальности при нынешних условиях разработки.
			— Теперь таблица спонсоров в главном меню обновляется автоматически при подключении к интернету. Если его нет, то воспроизводится стандартный список топ спонсоров.
			— В редактор внешности главного персонажа добавлены новые настройки внешности, а также удалены старые, более неактуальные.
			— Был проведен полный рефакторинг системы генерации взаимоотношений с рандомизированными НПС: весь код был полностью переписан и вместо случайных значений теперь на него имеет значительный вес характер персонажа, пол и множество других факторов. Все его индивидуальные особенности будут учитываться во время распределения начальных отношений с другими НПС: НПС с одинаковым характером и увлечениями будут сбиваться в небольшие группы, высокомерные ненавидеть всех и вся, а агрессивные будут любить лишь одно — силу.
			— Был проведен рефакторинг системы, отвечающей за определение одежды/рукавов на эту самую одежду для рандомизированных НПС женского пола: теперь сам код, отвечающий за это, работает гораздо быстрее, стабильнее, а также в целом выглядит он намного лучше того, что было до этого. Касается он и кода в редакторе рандомизированных НПС, так и кода, который используется в самом игровом процессе игры.
			— Был проведен незначительный рефакторинг модуля, отвечающего за определение веса предметов в инвентаре: теперь все расчеты гораздо точнее. Кроме того, исправлены некоторые баги и недоработки, касающиеся этой области игры.
			— Был проведен незначительный рефакторинг модуля просчета времени суток: изменены некоторые глобальные переменные, в некоторых моментах изменены скрипты, что ускорит их загрузку и улучшит работоспособность. Кроме того, исправлены некоторые исключения, связанные с этим модулем и выскакивающие во время долгой игровой сессии.
			— Был проведен незначительный рефакторинг модуля, отвечающего за механику клуба журналистики. Теперь проблем, связанных с этой механикой, должно быть намного меньше.
			— Были удалены некоторые лишние повторяющиеся участки кода, а также некоторые были объединены в одну функцию, что избавляет игру от некоторых ошибок, связанных с этими моментами: неправильные просчеты, неактуализированные данные, исключения и другие проблемы.
			— На локация «Пляж» было добавлено новое локационное взаимодействие - загорать. При его использовании у вашего персонажа на 24 часа повышается привлекательность на 50 процентов.
			— Изменен лимит, который нужен для использования аптечки: с 29 единиц здоровья за конечность он был поднят до 39 единиц.
			— Увеличено время временного промежутка, когда должен выпадать ивент с собранием студенческого совета: теперь проблемы, из-за которых этот ивент мог не выпадать целыми неделями, быть не должно. Кроме того, практически у всех существующих ивентов были чутка увеличены временные промежутки доступности.
			— В меню патреон подписчика была добавлена новая функция: изменить патрон код.
			— Был полностью перерисован фон локации, где проводятся собрания студенческого совета. Кроме того, туда же был добавлен новый вариант времени суток - ночной.
			— Были удалены некоторые лишние файлы из папки с игрой, а также перенесены некоторые участки кода в разные места, что улучшит их общий вид и конструкцию.
			— Добавлены новые анимации в существующий интерфейс игры.
			— Был проведен полный рефакторинг кода, который касается клуба оккультизма: все расчеты были перенесены в отдельные функции. Вместо повторяющихся строк кода, теперь вызывается функция, что уменьшит количество ошибок в самих просчетах, исправит определенных исключения, возникающие при некоторых обстоятельствах, а также исправит проблемы с неправильным сокращением дробных чисел до определенных значений.
			— Был проведен незначительный рефакторинг кода, отвечающего за инициализацию игровых данных: теперь багов, связанных с отсутствующими переменными, практически не имеется, а также в общем и в целом немного улучшена ситуация с нагрузкой при начале игры/на протяжении игровой сессии.
			— Был проведен рефакторинг модуля, отвечающего за определение внешности рандомизированного НПС: все лишние проверки и функции были перенесены в сам генератор рандомизированных НПС, что снизит нагрузку при воспроизведении этого модуля и улучшит ситуацию с небольшими подлагиваниями при заходе в меню взаимодействия. Кроме того, исправлены также и некоторые баги, связанные с неправильным отображением различных особенностей внешности, с неправильным просчетом роста/веса персонажа и других его особенностей.
			— Был проведен незначительный рефакторинг модуля, отвечающего за генерацию рандомизированных НПС в уже существующей сессии: теперь весь этот модуль учитывает выбранные особенности генерации, были исправлены баги и недоработки, связанные с определением внешности/имени и других особенностей РНПС.
			— Теперь оперативная память игрой очищается не раз в одну игровую неделю, а раз в игровой месяц.
			— Теперь после ввода патреон кода вы сможете открыть меню патреон подписчика, где у вас появится возможность добавить свой никнейм в таблицу спонсоров в случае надобности и такого желания.
			— Был проведен незначительный рефакторинг части кода, отвечающего за создание, отображение и изменения внешнего вида рандомизированных НПС и вашего персонажа.
			— В интернет-магазин на ПК игрока было добавлено два новых предмета - повседневная одежда и гачи костюм. Купив их, у вас появится возможность надеть их на своего персонажа.
			— Был добавлен новый фон во время использования локационной возможности «Принять душ» в комнате игрока.
			— Был проведен рефакторинг кода, который касается трех сцен с рандомизированными НПС: теперь ошибок и исключений, связанных с этими сценами, намного меньше. Кроме того, кроме самого рефакторинга, были исправлены некоторые графические проблемы, одна из сцен была полностью перерисована и доработана, теперь в самих сценах учитываются новые типы тел рандомизированных мужских НПС. Также, кроме всего прочего, в них теперь учитывается и два новых костюма для РНПС мужского пола.
		`,
		bugfix: `
			— Исправлен баг, из-за которого при прохождении некоторых ивентов не тратилась энергия/сытость, а также не проходило время.
			— Исправлена проблема, из-за которой в некоторых случаях могло не перенаправлять в главное меню игру, даже когда нужная кнопка/функция нажата.
			— Исправлена недоработка, из-за которой могло направить в неправильную локацию после конца мини-ивентов в локации академии.
			— Исправлена недоработка, из-за которой модуль распределения ивентов с рандомизированными НПС мог при некоторых условиях выдавать исключения.
			— Исправлена недоработка, из-за которой в функции просчета внешности главного персонажа, не сохранялся результат расчетов модификатора просчета страха.
			— Исправлена недоработка, из-за которого в некоторых моментах мог неправильно просчитываться модификатор внешности вашего персонажа.
			— Исправлена недоработка, из-за которой могло выйти исключение в случае невозможности сделать автосохранение игрой.
			— Исправлена недоработка, из-за которой списки подлокаций показывали не полный список имеющихся подлокаций, если ваш персонаж выполнял необходимые условия для получения этого.
			— Исправлен баг, из-за которого могло выйти исключение при редактировании рандомизированного НПС в редакторе при некоторых случаях.
			— Исправлена недоработка с неправильным видом текстур живота на рандомизированных НПС, если у них была сила выше 30 единиц.
			— Исправлен баг, из-за которого могло выйти какое-либо исключение при воспроизведении ивентов с активностями рандомизированных НПС.
			— Исправлен баг, из-за которого не работали начальные этапы отношений в редакторе рандомизированных НПС.
			— Исправлен баг, из-за которого рукава одежды у рандомизированных НПС женского пола могли быть поверх основного набора одежды.
			— Исправлен баг, из-за которого могло выйти исключение во время открытия меню взаимодействия с рандомизированными НПС, которые находились на городском пляже.
			— Исправлен баг, из-за которого могло выйти исключение, если на рандомизированном НПС был надет определенный тип одежды, и он имел определенный тип тела.
			— Исправлен баг, из-за которого могла пропадать Юки Оота в некоторых случаях сюжета из студенческого совета.
			— Исправлен баг, из-за которого могло выйти исключение в самом начале игры при некоторых условиях и настройках генерации.
			— Исправлен баг, из-за которого могло выйти исключение во время определенных сюжетных ивентов, при определенных выборах.
			— Исправлена недоработка, из-за которой некоторые эмоции в сюжетных ивентах могли отображаться некорректно.
			— Исправлен баг, из-за которого могли повреждаться уже имеющиеся сохранения самой игрой, а также из-за него же игра могла не видеть имеющиеся сохранения на некоторых устройствах.
			— Исправлен баг, из-за которого могли отображаться неверные эмоции на лицах рандомизированных НПС во время некоторых ивентов с ними.
			— Исправлен баг, из-за которого мог пропадать интерфейс и/или его детали при некоторых манипуляциях с игрой.
			— Исправлена недоработка, из-за которой некоторые детали рандомизированных НПС могли быть не на своих местах, отчего сами НПС могли выглядеть странно.
			— Исправлен баг, из-за которого не отображались подсказки в меню менеджмента клуба оккультизма: при наведении до этого не отображались перки РНПС, на которых наводился курсор/палец.
			— Исправлен баг, из-за которого подсказки в интерфейсе менеджмента клуба оккультизма могли отображаться некорректным образом: где-то текст выходил за подложку, где-то не отображался перевод.
			— Исправлен баг, из-за которого на рандомизированных НПС мужского пола нового типа не отображалась никакая одежда, кроме формы, которую они должны носить в академии.
			— Исправлен баг, из-за которого на рандомизированных НПС мужского пола нового типа не отображались половые органы в случае, когда на них не было одежды.
			— Исправлен баг, из-за которого на рандомизированных НПС мужского пола нового типа не работал предмет "Странного вида очки".
			— Исправлен баг, из-за которого показатели атрибутов могли двоиться, если игрок заходил смотреть на их значение на странице в дневнике при некоторых обстоятельствах.
			— Исправлены недоработки, из-за которых некоторые ивенты и выборы в них с Юки Оота приводили к тому, что в дневнике отображался неправильный путеводитель. Такие выборы были исправлены и теперь то, как нужно проходить сюжет дальше, отображается в дневнике корректно.
			— Исправлен баг, из-за которого в меню смены одежды тип тела вашего персонажа мог из раза в раз меняться, как и его внешность в целом.
			— Исправлена недоработка, из-за которой ваш персонаж мог появиться с лишними татуировками/шрамами.
			— Исправлен баг, из-за которого было невозможно изменить одежду вашего персонажа в меню ее смены.
			— Исправлены некоторые недоработки главного меню.
			— Исправлен баг, из-за которого не всем РНПС давались очки отношений/привязанности/страха во время получения перка/предмета, обвязывающие получение этого.
			— Исправлен баг, из-за которого функция просчета шанса выпадения ивента могла учитывать не все переменные, отчего таковая работала некорректно.
			— Исправлены небольшие недоработки в модуле распределения рандомизированных НПС по локациям их клубов/рода деятельности.
			— Исправлена недоработка, из-за которой на рандомизированных НПС мужского пола мог заспавниться гачи костюм в игровой сессии в виде предпочтения в одежде без использования читов/редактора РНПС.
			— Исправлены все баги и недоработки генерации главного персонажа: теперь вся внешность генерирует так, как нужно.
			— Исправлены некоторые баги и недоработки, связанные с внешность мужских рандомизированных НПС нового типа: теперь все детали отображаются так, как нужно, без каких-либо проблем.
			— Исправлена проблема, из-за которой показатель сытости мог быть не целочисленным числом. Кроме того, изменены общие начальные показатели: максимальный уровень сытости был снижен на начальных этапах игры.
			— Исправлена недоработка, из-за которой в начале игровой сессии в продуктовом магазине могло быть недостаточно продуктов некоторого типа.
			— Исправлены некоторые проблемы, связанные с тем, что игра могла неправильно просчитывать атрибуты вашего персонажа в определенных моментах игры.
			— Исправлена работоспособность некоторых перков в игре: теперь все работает так, как надо.
			— Исправлена недоработка, при которой некоторая статистика влияния рандомизированных НПС не всегда успевала подгружаться при взаимодействии с ними.
			— Исправлены некоторые опечатки в русском переводе игры.
			— Исправлены ошибки английского перевода игры в некоторых моментах: неточности, отсутствие перевода в определенных моментах, опечатки и исключения, возникающие в особо редких случаях.
			— Исправлены недоработки, связанные с неправильным просчетом некоторой статистики, которая касалась механики драк.
			— Исправлен баг, из-за которого могло выйти исключение при использовании некоторых взаимодействия с рандомизированными НПС.
			— Исправлен баг, из-за которого могло выйти исключение во время долгой игровой сессии при условиях, что был пройден сюжет с клубом журналистики и открыта механика управления этим клубом.
		`,
	},
};

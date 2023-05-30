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
			— Fixed a bug that could cause an exception to occur during some events with the Suzuki Matsui.
			— Fixed a bug that could cause all male randomized NPCs to be bald.
			— Fixed a bug due to which the number of perfumes in the backpack was displayed incorrectly.
			— Fixed a bug that caused exceptions to be thrown when using certain features in the beauty salon.
			— Fixed a bug due to which, during a game session, if you start to randomize the game and click the "Remove All" button in the editor, all randomized NPCs in the game were without clothes.
			— Fixed a bug that could cause text wrapping to work in the Randomized NPC interaction menu, thereby completely breaking the interface itself.
			— Fixed a bug that caused an exception to occur when changing the game language during a game session (not from the main game menu).
			— Fixed a bug that caused an exception to occur when using the location interaction associated with the festival at the academy location.
			— Fixed an issue where the event with a randomized female NPC escort could drop during the pre-tutorial and/or any time other than after the tutorial itself.
			— Fixed a bug due to which the gender of a randomized NPC could change during the event to accompany him home.
			— Fixed a bug that could cause an exception to be thrown when entering the interaction menu with randomized NPCs.
			— Fixed a bug due to which the game could freeze at certain moments for a few seconds, and then throw an exception during the game session.
			— Fixed a bug due to which in some events taking place in the main character's apartment there might not be a background of this very room.
			— Fixed a bug that could cause a crash during playback of some events in the main character's apartment.
			— Fixed an issue with some incorrect and incorrect drop conditions for events with randomized NPCs on Academy grounds.
			— Fixed a bug due to which the options for interactions with the RNPCs under the first item in the English translation of the game could not be shown.
			— Fixed a bug due to which the game spawned one less randomized NPC than it should.
			— Fixed a bug due to which backgrounds with randomized NPCs of a non-18+ character could freeze on the screen in some cases.
			— Fixed a bug that caused an exception in some events with Yuki Oota.
			— Fixed a bug that could cause an exception to occur after starting a new game with some chance.
			— Fixed a bug that could cause the game to crash during a game session.
			— Fixed a bug that could cause the game to lag after a certain amount of time.
			— Fixed a bug due to which some interface could not be displayed correctly in the English translation of the game.
			— Fixed an issue where generating randomized NPCs could break the game in some cases.
			— Fixed a bug where randomized NPCs could choose the wrong activity/appeal to the main character at certain points in the gameplay.
			— Fixed a bug that could cause an exception to occur when going through Randomized NPC activities to Randomized NPCs regarding their romantic interactions.
			— Fixed a bug due to which the amount of money received for work could be displayed as a non-integer number.
			— Fixed a bug where the more sexual experience your character had, the less control they had in sex scenes when it should have been the other way around. In addition, the existing formulas were slightly corrected and brought under the current game balance.
			— Fixed a bug due to which the function "Campaign for Yuki Oota" could not be displayed in some tabs with randomized NPCs and under certain conditions.
			— Fixed a bug that could cause clothing to be colorless/purely black for randomized female NPCs in the Randomized NPC Editor.
			— Fixed a bug due to which the scroll bar in the main menu could abruptly interrupt all text at some stage of its scrolling.
			— Fixed an issue that could cause some events and interactions to not display when playing in English.
			— Fixed a bug due to which, in some cases, the 4th base hairstyle could not have part of the hair in the back of the character.
			— Fixed a bug that could cause an exception to occur during gameplay due to some randomized NPC generation errors.
			— Fixed a bug due to which some game interface could not be displayed correctly in some cases/situations.
			— Fixed an issue that could cause the game to crash after some time on some particularly weak devices.
			— Fixed a bug that could cause an exception to be thrown when selecting certain skin/costume combinations and other things related to the RNPCs editor.
			— Fixed a bug due to which randomized NPCs could do different location activities that they should be doing in the location they are in.
			— Fixed a bug due to which, at some points in the story, it could lead to incorrect entries in your character's diary, misinforming and giving inaccurate information.
			— Fixed a bug due to which, in the middle of a game session, a randomized NPC could change his appearance without any prerequisites.
			— Fixed a bug due to which some indicators in the diary could be incorrectly displayed in fractional values.
			— Fixed a bug that could cause an exception to be thrown during gameplay under certain generation conditions/problems in gameplay.
			— Fixed an issue where randomized NPCs could change their clothing color at the most unnecessary and inopportune time to do so.
			— Fixed a bug that could cause the game to crash after a while on particularly old devices.
			— Fixed a bug due to which the game could at some points take too long to respond to clicks/open any menu for a very long time, and also generally behave incorrectly on some especially weak devices.
			— Fixed a bug that could result in incorrect relationship/affection/fear scores with randomized NPCs during certain interactions.
			— Fixed a bug that could cause an exception to occur when using certain interactions with randomized NPCs.
			— Fixed a bug that could cause an exception to occur when playing any events with randomized NPCs.
			— Fixed a bug that could cause incorrect relationship scores to be displayed when inviting a randomized female NPC to your home.
			— Fixed a bug due to which the wrong randomized NPC could come to visit your character, which was supposed to come.
			— Fixed a bug due to which, in some events with randomized NPCs, an incorrect number of attributes could be removed / added to your character.
			— A bug has been fixed due to which an incorrect value of your character's attributes could be displayed in some moments of the game.
			— Fixed a bug due to which the textures of randomized NPCs could be displayed incorrectly at some points in the game on some devices.
			— Fixed an issue that could cause the textures of the Jacket and Skirt Outfit Set to work incorrectly. In addition, now any texture/color overlay does not work at all on this set of clothes due to incorrect performance.
			— Fixed a bug due to which the third basic hairstyle in the editor of the main character could not be displayed correctly when changing the hairstyle.
			— Fixed a bug that could cause an exception to be thrown when having sex with randomized female NPCs
			— Fixed a bug due to which the location interaction buttons in the Gym location were simultaneously highlighted when they were hovered over.
			— Fixed a bug due to which some events with randomized NPCs could be played with a male NPC and not a female one, even if the original event intended otherwise.
			— Fixed a bug that could cause some editing options for randomized NPCs to disappear in the editor after some preliminary interactions with it.
			— Fixed a bug related to incorrect display of the appearance of some randomized NPCs in a game session.
			— Fixed a bug that could cause events with Robert the Cockroach to drop even if your character wasn't friendly with him to begin with.
			— Fixed a bug due to which in the scenes of pawing the chest / buttocks of randomized female NPCs, they could have clothes in moments when they should not.
			— Fixed a bug where a randomized NPC could have clothes in the activity menu when they should not.
			— Fixed a bug that could cause an exception to be thrown due to some occult club management systems during game sessions.
			— Fixed a bug due to which extra files could be in the list of academies that could be imported.
			— Fixed some typos made in the opening story.
			— Fixed a bug that could cause some UIs to display features of already removed mechanics/systems.
			— Fixed a bug that could cause an exception when trying to donate money to the academy budget.
			— Fixed a bug that could cause an exception in the player's room under certain in-game conditions.
			— Fixed a bug that could cause your character to be nude if you previously edited randomized NPCs and clicked on the "Clear All" button.
			— Fixed a bug due to which events with randomized NPCs could drop in the wrong locations in which they should drop.
			— Fixed a bug where if your character broke a male character, the text would still refer to him as a girl.
			— Fixed a bug due to which after pressing Shift+Alt+F12/F9/F10 the indicators of attachment/love/fear of randomized NPCs to your character did not increase.
		`,
	},
};

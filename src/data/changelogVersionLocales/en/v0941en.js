import { v4 } from 'uuid';

export const v0941en = {
	id: v4(),
	title: '0.941',
	content: {
		new: `
			— New storyline events have been added to the Suzuki Matsui stealth storyline, which drops if your character has enough map experience and some attributes.
			— The hidden storyline with Ayano Yoshida was finished in its entirety. It has been updated with new event pieces and some edits. In addition, this branch itself now gives a relationship with the character and reveals a new side to him. This storyline can fall out after completing some of the story in the city library with some chance.
			— Some details for your character creation system have been completely changed: firstly, instead of 30 unallocated attribute points you now get 50, secondly, the growth settings and the appearance feature system have been completely removed - everything has been moved to the character's appearance setting. In addition, some details were slightly reworked for the sake of balance after these changes.
			— The hidden storyline with Ayano Yoshida has been updated: more different quests have been added, as well as some modifications to the existing ones in general. In addition, some of the conditions of their fallout have been revised.
			— New mini-event items related to Ayano Yoshida's character have been added. They can fall out in absolutely any location with a small chance.
			— A new storyline has been added for Suzuki Matsui's character. It can fall out if your character has an existing storyline with her, and also if your character has enough skill to play cards/physical attributes.
			— Added new working events related to moonlighting at the grocery store.
			— Changed and redesigned new events with Yuki Oota to current standards: you will now be able to cast your character's character through multiple choices. If before you didn't like his character, prescribed in the beginning, now you can safely step away from him and play something else. At the moment, the structure of the events with her is similar in terms of choices to the structure of the initial events with Ayano Yoshida.
			— The Suzuki Matsui storyline has been slightly redesigned: some dialogue has been changed, new choices that affect the storyline have been added, some old choices have been removed, and the overall storyline now looks a bit better.
			— A new interaction has been added to the list of romantic interactions with randomized male NPCs - have sex. Naturally, clicking on it will display a new scene.
			— New mechanics have been added to sex scenes with randomized NPS: now your character's penis size affects the 18+ scene itself, consent/rejection of this interaction by randomized NPS and some other aspects of these scenes.
			— Sleep now restores much more health to your character's limbs.
			— The maximum weight indicator now has a minimum possible value of 4 kilograms, which will save the game from bugs where the maximum possible weight could be below zero.
			— A minor refactoring of the system of part-time work in the grocery store was made: slightly edited formulas for the calculation of the wages under the current balance of the game, some bugs and defects associated with this game mechanics were corrected.
			— There was a minor refactoring, related to the system of generation of randomized NPS: now the NPS themselves are generated with a large number of interrelated factors, not contradicting each other.
			— Minor refactoring has been done on the journalism club management system/blackmail system, which opens up as the story progresses. There are now far fewer bugs and problems in these systems.
			— Refactoring was done on the system that is responsible for cooking. The code itself looks a little better, some things have been moved to separate functions, and the cooking formulas have been updated to reflect the current conditions of the game economy, as well as the overall game balance.
			— New life situations have been added, complicating the game and gameplay in general.
			— New possible location interactions in the gym were added: now your character can use the treadmill, increasing his stamina and agility with much greater efficiency.
			— New gameplay hints have been added to the hint menu, which can be opened using the in-game phone.
			— Some unnecessary features no longer used in the game have been removed, as well as files.
			— The album and photo feature is now only available on Windows devices.
			— A new feature has been added to the font customization page - the ability to enable/disable Text-to-speech. It is only available on all devices except android.
			— Existing success formulas for interactions with randomized NPS have been edited: some interactions have become easier to perform, while others have become slightly more complicated.
			— Some minor refactoring was done on the sleep system: some incorrect miscalculations were changed and removed, the code itself became a little clearer. In addition, new events and systems were added there, giving a little variety to the game and gameplay in general.
			— A minor refactoring of the system responsible for the distribution of randomized NPS in the location: now this system is much more stable and has far fewer errors in the calculations.
			— There was a minor refactoring of the in-game time calculation: more unnecessary lines of code were removed, something was edited to a more acceptable way. The game began to run a little more stable on older android devices, as well as some other weak devices.
			— New quests related strictly to your character's luck attribute have been added. The more luck, the greater the chance that these events will fall out, as well as the luck itself will affect the results of these very events.
			— Added new random events with randomized NPS. Including those of 18+ focus. Their falling out depends on the attributes of your character and some other factors.
			— New activities/locational interactions with randomized female NPCs were added.
			— Was slightly modified system of calculation of the interval of the dropout of the available in-game events: events that fall out too often, got a little longer delay interval, and the others on the contrary.
			— A minor refactoring of the system of falling out events with randomized NPS was made: the code itself began to work a little faster, it became more understandable, and also it is now a little easier to upgrade than before.
			— There was a minor refactoring of the combat system: some bugs and bugs associated with it were fixed, the chances of different variations of these very fights were adjusted.
			— A minor refactoring of the system responsible for the 18+ system with randomized NPS was done: existing bugs and bugs were fixed, a little work on creating new systems and improving the code was done, and in general the work on the improvement of the system was done.
			— Refactoring of the system responsible for launching the game/patreon code entry and everything related to it was done. Bugs and bugs were fixed, the functionality of the systems and mechanics was improved, as well as the code responsible for this part of the game was improved in general.
			— There was a minor refactoring of the system, which is responsible for the function of the necessary miscalculations for the management mechanics of the journalism club. Some bugs, incorrect formulas were fixed, and overall the code is a little better and easier to understand.
			— Code refactoring was conducted, which dealt with the system of increasing the relations with randomized NPS: the system was adjusted to the existing game balance, as well as it was fixed some miscalculations.
			— There was a small revision of the system, related to orientations, as well as romantic interactions with randomized male NPS: now they act more logically, the actions themselves require a certain range of factors.
			— A minor rebalance was made to the system that was responsible for the distribution of randomized NPS across locations, for the pumping of their attributes, as well as for their interactions with each other. There are now fewer bugs and flaws in these systems, there are slightly more blunders and they are slightly more accurate.
			— The system that is responsible for determining the location of randomized NPCs/your character has been refactored.
			— There was a minor refactoring of the code that was responsible for giving gifts to randomized NPS: now it works more stable, the formulas are adjusted to the current game balance.
			— There was a small correction of the systems responsible for the features of appearance, perks and some other systems, related / dependent on this. Everything has been tweaked and redesigned for the current realities of the game.
			— Randomized male NPCs of the new type have a new feature: now, depending on their level of physical attributes on their body will appear/absence of abs. There is some gradation in this feature. In addition, the same feature affects your character: abs will now also appear on their body if they have enough physical attributes to do so.
			— The system responsible for determining your character's appearance has been refactored slightly: it now has far fewer bugs, the systems are linked together by new persistent calculations, and in general it now runs a bit faster than before.
			— New positions have been added to the mechanics of the part-time grocery store: four new positions have been added, with each of which the pay increases accordingly. In addition, some wage values in existing positions have been adjusted.
			— New work-related events have been added. To get them, all you have to do is start a part-time job at the grocery store.
			— Grocery store wages are now also affected by the difficulty level: the lower the difficulty level, the higher the wage.
			— Simplified the conditions for dropping off some story quests with the characters Ayano Yoshida and Yuki Oota.
			— Your character's luck and authority attribute can now be made greater than 120 units. At the moment, the maximum possible value of these attributes has been raised to 400 units. The same goes for the cunning attribute whose maximum possible attribute has been raised to 200 units.
			— The cunning attribute has been slightly revised: it still affects the results of the events, but its influence on gameplay has been slightly reduced.
			— The authority attribute was slightly redesigned: it now has a much greater effect on the results of bullying/beating and other things related to aggressive interactions.
			— The background of Ayano Yoshida's apartment has been completely changed and redesigned. In addition, two new times of day have been added.
			— A new background has been added to the game in some of the existing events, the forest.
			— Clothing now changes color using the new RGB color change feature only when a Best Friend level patreon code is entered. Temporary, for tests.
			— Fixed bug which caused some items to not appear in the Patreon Subscriber menu after pressing the appropriate button in the English translation of the game.
			— Fixed a bug which caused the main menu interface in the Patreon Subscriber menu to close incorrectly, with one part closing faster than the other.
			— Fixed a bug which caused the Patreon Subscriber menu to drop out when you change the patreon code, and the menu itself with the entry of this very patreon code did not come out over time.
			— A bug was fixed which could not drop out some of the work items during the mini-game in the grocery store.
			— Now if you enter 'exit' in the menu to enter your nickname in the donator table, you can go back to the cabinet of the patreon subscriber.
			— Slightly changed the appearance of the running line in the main menu of the game.
			— In the game's character creation menu, if you invest free points in the attributes of luck, prestige and cunning, their value increases not by one unit, as before, but by two.
			— Now if your character wins any RNPS in the cards, he is one hundred percent likely to increase his attribute luck, and with a 25 percent probability can increase his attribute of cunning and authority.
			— The system of generating your character's appearance has been completely changed: now from the very beginning nothing is generated on him except the basis, which includes the body and hairstyle. Everything else you can customize in the menu of changes of his appearance, tattoos can be scored in the game session, and scars can be obtained in fights/injuries.
			— From the editor of randomized NPC was removed the ability to select the first type of body for the male NPC.
			— Your character can now still get a bonus if you skip the minigame in the grocery store, though not as often as with the minigame.
			— Your character can now slightly decrease in height due to barbell work in the gym, and increase in height due to barbell work in the academy stadium.
			— A minor refactoring of the main menu interface was made: some problems in it were fixed, some animations were corrected.
			— A minor refactoring of your character creation interface was done: some rudimentary things were removed, some mechanics associated with this system were redone, the overall communication of this entire interface was improved, and the balance was slightly corrected.
		`,
		bugfix: `
			— Fixed bug that not all romantic interactions were displayed with randomized male NPCs.
			— Fixed a bug where the text window would not always close during some interactions with randomized male NPCs that do not involve the text window.
			— Fixed some bugs related to the actual 18+ scenes in the game.
			— Fixed bug related to the fact that all clothing of randomized female NPS could be black/colorless.
			— Fixed a bug that would cause you to get to more non-existent locations using the "Search for a Character" feature.
			— Fixed a bug that caused your character's attribute stats to be calculated incorrectly during some events with randomized NPCs.
			— Fixed a bug which could cause an exception during some events at the grocery store.
			— Fixed a bug that could cause an exception during the replay of some quests with randomized NPCs.
			— Fixed a bug that could cause the game's storyline with the characters Yuki Oota and Meiko Tsukasa to be blocked in certain circumstances.
			— Fixed a bug that caused permanent exceptions when playing cards on the player's computer.
			— Fixed a bug that caused an incorrect price for treatment in a hospital location.
			— Fixed a bug which could cause an exception to appear when you clicked on a randomized NPC and then opened the interaction menu with it.
			— Fixed a bug which caused the kill the hooligans quest not to end when winning a fight over the leader of the hooligans.
			— The bug because of which the damage from fights showed incorrect percentage values in the player's diary was fixed.
			— Fixed a bug which caused the percentage of debuffs to be displayed incorrectly in the main character's diary.
			— Fixed a bug which caused some of the new sub-jobs in the grocery store to not drop at all.
			— Fixed a bug that could sometimes cause Russian words to come out when using the player's PC in the English translation of the game.
			— Fixed some incorrectly working perks per level for your character.
			— Fixed some storylines/lines with randomized NPCs not working correctly. Now both the storyline with Yuki Oota and the storyline with the bullies at the academy work correctly. Also, the existing randomized NPC event dropout formulas were slightly corrected to current attribute/influence point standards and other factors.
			— Fixed a bug that could cause an exception to come out due to some randomized NPS generation issues.
			— Fixed a bug that could cause some appearance/detail features of randomized NPS to be displayed incorrectly.
			— Fixed a bug that was causing some of the interface to be displayed incorrectly.
			— Fixed a bug related to some incorrect in-game interface animations.
			— Fixed a bug that caused some percentages in the interface with the journalism club management to be displayed in fractional rather than integer values.
			— Fixed a bug that could cause an exception when generating a certain set of clothing/accessory on a randomized NPC.
			— Fixed bug which caused some places with story NPS in English translation of the game to have text in Russian.
			— Fixed bugs, which caused the game to crash in the middle of the game due to some errors in the in-game timing script.
			— Fixed bug which could cause exclusion of the randomized NPS generation modes at the beginning of the game session.
			— Fixed a bug which caused some miscalculations of the general vulgarity level of the academy to be incorrect.
			— Fixed a bug that could cause an exception during the editing of randomized NPCs in the editor after the beginning of the game session.
			— Fixed bug which caused randomized NPCs to have incorrectly generated attributes for their character traits.
			— Fixed a bug where some body types on randomized male NPS could be displayed incorrectly without proper attributes/influence factors taken into account.
		`,
	},
};

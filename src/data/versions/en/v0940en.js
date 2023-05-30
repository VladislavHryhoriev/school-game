import { v4 } from 'uuid';

export const v0940en = {
	id: v4(),
	title: '0.940',
	content: {
		new: `
			— A new small storyline has been added for the character Ayano Yoshida. It comes out randomly after a certain progress in the story. In addition, various mini-event items have been added that relate directly to this character.
			— New new events concerning Meiko Tsukasa have been added. They allow you to switch from the romance branch to the blackmail branch, they tell a bit more about the character himself, and also have certain choices that allow you to play off your character's character.
			— Suzuki Matsui's storyline has been redesigned: a new event has been added to her storyline, the diary hints regarding her storyline have been changed and refined, and the text in some places in existing events has been changed.
			— The interface of the game's main menu was completely redesigned and refined: it became more presentable, it got a lot of animations and additional features like a running line of game tips, pop-up dialogues, as well as other things that complete the whole menu in general.
			— Your character now has a different physique depending on his physical attribute scores: he can be fat, skinny, average weight, or chunky. Also, now he can't have the old type body. Now he only has a new type body on a permanent basis.
			— Added a new possible pet/domesticate for your character, Robert von Tarakanius. If you choose correctly in one of the events, he will appear at your character's home and help him. Fortunately, he can always be kicked out with certain gadgets, eaten when hungry, or start ignoring, which can make him go away.
			— A new category of events related to your character's housing has been added: your character will now experience various problems related to this element of the game. For example, with some chance the pipes in the apartment can burst, the courier can make a wrong address in the delivery: each event causes not only problems, but also gives your character small buffs to the attributes, certain statistics and other elements of the game. In addition, the interval of their fallout is set as one in-game month, from which such events will not seem like a chore.
			— In the existing interface in some places have been added animations and other things to make it more lively and interesting.
			— The Suzuki Matsui storyline has been slightly redesigned: the initial dialogues have been modified, new choices affecting the storyline have been added, some old choices have been removed, and overall the storyline now looks a little better.
			— Changed and reworked some of the new storyline with Ayano Yoshida to current standards: you can now cast your character's character through numerous choices. If before you didn't like his character, prescribed in the beginning, now you can safely step away from him and play something else.
			— Added a new feature to the editor of randomized NPS: repaint in any color existing sets of clothes. This is done by entering RGB code in the appropriate tab in the editor. All clothing is divided into bottom and top, which increases the number of available options and room for imagination. This is currently only available to randomized female NPCs, as well as to patreon subscribers with a subscription above or equal to Best Friend ($10), for the time being, until this feature is tested.
			— Now certain sets of clothes are generated in different colors: there are more than a dozen pieces, all chosen depending on the type of randomized female NPS and other factors.
			— Added new quests, which relate to the direction of the daily quests, dropped in the apartment.
			— New location quests have been added, adding to the difficulty of passing: each one affects your character in its own way. The fallen out event can both improve your character's attribute and reduce it. The very fallout of the extremely unlucky difficulty-adding inventions depends on your character's luck.
			— A new location has been added, which is available to visit - the gym. To visit it you need to buy a season ticket there, and its very attendance gives more opportunities to pump the physical attributes of your character.
			— There was a minor refactoring of the in-game map, which will get rid of some of the problems associated with it, as well as accelerate the creation of location-related content in the future.
			— There was a minor refactoring of the distribution system of randomized NPS on locations: their movements became a little more logical, and the locations, which before they could ignore, became more visitable.
			— Refactoring was made, concerning the system for calculating the number of achievements: now everything is much more stable, the calculations themselves are carried out in a separate function, and the code is more understandable.
			— Many more location actions now affect the relationship between your character and the randomized NPS.
			— New mini-event related to randomized NPS have been added, as well as minor editing of the already existing in-game events of this type.
			— Slightly edited module responsible for the distribution of clothing on randomized NPS: the choice itself is now based more on their personal preferences, relationships with other RNPS, as well as some other factors.
			— There was a minor refactoring concerning the attitude modifier system: maximum and minimum limits were added, some bugs and flaws in miscalculations were corrected.
			— In some quests with randomized NPS added more conditions for falling out: some of them now will not fall out until your character gets the desired level of popularity / does not reach a certain point in the story.
			— Fixed a bug that would come out if you donate money to the academy, causing a new student to be added and a new exception after rewinding time.
			— Removed some minor features and functions that could cause bugs and problems with the appearance of randomized NPCs on screen.
			— Removed the tab with the appearance features from the main character's diary due to its uselessness and rudimentary under the current conditions of development.
			— Now the table of sponsors in the main menu is updated automatically when you connect to the Internet. If it is not, the standard list of top sponsors is played.
			— New appearance settings have been added to the main character's appearance editor, and the old, more irrelevant ones have been removed.
			— There was a complete refactoring of the system of generation of relationships with randomized NPS: the whole code was completely rewritten and instead of random values now has a significant weight on the character's character, gender and many other factors. All of his individual characteristics will be taken into account during the distribution of the initial relationships with other NPS: NPS with the same character and hobbies will clump into small groups, the arrogant will hate everyone and everything, and the aggressive will love only one thing - force.
			— Refactoring of the system responsible for determining the clothing/sleeves on this very clothing for randomized female NPS was done: now the code itself, which is responsible for this, works much faster, more stable, as well as in general it looks much better than it was before. It also applies to the code in the randomized NPC editor, as well as the code that is used in the gameplay itself.
			— There was a minor refactoring of the module responsible for determining the weight of items in the inventory: now all the calculations are much more accurate. In addition, some bugs and defects related to this area of the game have been fixed.
			— There was a minor refactoring of the module for calculating the time of day: some global variables were changed, in some moments the scripts were changed, which will speed up their loading and improve performance. In addition, fixed some exceptions associated with this module and popping up during a long game session.
			— There has been a minor refactoring of the module responsible for the mechanics of the journalism club. There should now be far fewer problems associated with this mechanic.
			— Some unnecessary repetitive parts of the code have been removed, and some have been merged into one function, which saves the game from some of the bugs associated with these points: incorrect miscalculations, inactualized data, exceptions and other problems.
			— A new location interaction has been added to the Beach location, tanning. When you use it, your character's attractiveness is increased by 50 percent for 24 hours.
			— Changed the limit needed to use the first aid kit: from 29 health units per limb it was raised to 39 units.
			— Increased the time period in which the event with the student council meeting should fall out: now there should be no problems, because of which this event could not fall out for weeks. In addition, almost all existing events have had their availability intervals slightly increased.
			— A new feature was added to the subscriber patreon menu: change patreon code.
			— The background of the location where student council meetings are held has been completely redrawn. In addition, a new time of day option has been added there as well - night time.
			— Some unnecessary files from the game's folder were removed, and some sections of code were moved to different places, which will improve their overall appearance and design.
			— New animations were added to the existing game interface.
			— A complete refactoring of the code that deals with the occult club has been done: all calculations have been moved to separate functions. Instead of repeated lines of code, a function is now called, which will reduce the number of errors in the calculations themselves, fix certain exceptions that occur under certain circumstances, and fix problems with incorrect reduction of fractional numbers to certain values.
			— A minor refactoring of the code responsible for initialization of game data was done: now there are almost no bugs related to missing variables, as well as in general and slightly improved load situation at the beginning of the game / during the game session.
			— Refactoring of the module responsible for determining the appearance of randomized NPS was done: all unnecessary checks and functions were moved into the randomized NPS generator itself, which will reduce the load when playing this module and improve the situation with small slugs when entering the interaction menu. In addition, also fixed some bugs associated with the incorrect display of various features of the appearance, with improper calculation of the height/weight of the character and other features.
			— Some refactoring of module responsible for generation of randomized NPS in already existing session was made: now this entire module takes into account the selected features of generation, bugs and defects related to the definition of appearance/name and other features of NPS were corrected.
			— Now RAM is cleared by the game not once every game week, but once a game month.
			— Now after entering the patreon code you will be able to open the patreon subscriber menu, where you will have the opportunity to add your nickname to the sponsor table if you need and want to.
			— There was a minor refactoring of the part of the code responsible for creating, displaying and changing the appearance of randomized NPS and your character.
			— Two new items were added to the online store on the player's PC - casual wear and gachis costume. By buying them, you will have the opportunity to put them on your character.
			— A new background was added while using the "Take a shower" location opportunity in the player's room.
			— Code refactoring has been done for the three scenes with randomized NPCs: there are now far fewer bugs and exceptions associated with these scenes. In addition, apart from the refactoring itself, some graphical problems were fixed, one of the scenes was completely redrawn and refactored, the scenes themselves now take into account the new body types of randomized male NPS. Also, among other things, they now take into account two new costumes for male RNPS.
		`,
		bugfix: `
			— Fixed a bug that caused some quests not to spend energy/saturation, and not to pass the time.
			— Fixed a bug which caused some players not to be redirected to the main game menu even if the necessary button/function was pressed.
			— Fixed an issue which caused me to be redirected to the wrong location after the end of the mini-event in the academy location.
			— Fixed the bug at which the module of distribution of the quests with randomized NPCs could give out exceptions under certain conditions.
			— Corrected the defect that the appearance calculation of the main character did not save the result of the Fear Calculation Modifier.
			— Fixed a bug which caused your character's appearance modifier to be miscalculated at certain moments.
			— Fixed a bug which caused an exception to appear if the game did not autosave.
			— Fixed bug which caused the sublocations lists to show not the full list of available sublocations if your character had fulfilled the necessary conditions to get it.
			— Fixed a bug that could cause an exception when editing a randomized NPC in the editor in some cases.
			— Fixed bug with wrong appearance of abdominal textures on randomized NPS if they had strength above 30 units.
			— Fixed a bug that could cause an exception when replaying events with randomized NPS activities.
			— Fixed a bug which caused the initial stages of the relationships in the randomized NPF editor to not work.
			— Fixed bug which caused the sleeves of the clothing of randomized female NPS could be on top of the main set of clothes.
			— Fixed a bug which caused an exception to appear while opening the interaction menu with randomized NPCs that were on the city beach.
			— Fixed a bug that would cause an exception if a randomized NPC was wearing a certain type of clothing and had a certain body type.
			— Fixed a bug that could cause Yuki Oota to disappear in some instances of the Student Council storyline.
			— Fixed a bug that could cause an exception at the beginning of the game for some conditions and generation settings.
			— Fixed a bug that could cause an exception to appear during certain story events, with certain choices.
			— Fixed a bug that could cause some emotions in story events to be displayed incorrectly.
			— Fixed a bug which could corrupt the existing preserves by the game itself. The same bug was also reported about the game not seeing the existing preserves on some devices.
			— Fixed bug which could show incorrect emotions on the faces of randomized NPC during some quests with them.
			— Fixed a bug which caused the interface to disappear and/or its details during some manipulations with the game.
			— The bug was fixed, because of which some details of the randomized NPS could be not in their places, and that could make NPS themselves look strange.
			— Bug fixed, due to which hints in the management menu of occult club were not displayed: when pointing the cursor/finger on the perks of RNPS were not displayed.
			— Fixed a bug that caused the tooltips in the interface of the occult club management could be displayed incorrectly: in some places the text was out of the padding, in some places translation was not displayed.
			— Fixed bug which caused the randomized male NPCs of new type to not show any clothes except for the uniform which they have to wear in the academy.
			— Fixed a bug that caused randomized new type male NPCs to not display their genitals when they were not wearing any clothes.
			— Fixed bug which caused randomized new type male NPCs not to have Strange-looking Glasses item working.
			— Fixed a bug that could cause attribute values to double up if the player went to look at their value on the page in the diary under certain circumstances.
			— Fixed a bug that caused some of the event and elections with Yuki Oota to display the wrong guide in the diary. Such choices have been corrected and now the way to go through the storyline is displayed in the diary correctly.
			— Fixed a bug which caused your character's body type to change from time to time in the clothes change menu, as well as his appearance in general.
			— Fixed a bug that caused your character to appear with extra tattoos/scars.
			— Fixed a bug that made it impossible to change your character's clothes in the change menu.
			— Fixed some bugs in the main menu.
			— Fixed bug that caused not all RNPS were given relationship/attachment/fear points while receiving perk/item that tied to receiving it.
			— Fixed a bug which caused the Event Chance Calculation function to take into account some variables, and that caused it to work incorrectly.
			— Fixed small bug in the module of distribution of the randomized NPC on the locations of their clubs/activities.
			— Fixed bug, due to which randomized male NPS could spawn a Gachi costume in a game session as a clothing preference without using cheats/REPU editor.
			— Fixed all bugs and flaws in the main character generation: now all the appearance generates as it should.
			— Fixed some bugs and bugs related to the appearance of randomized male NPCs of the new type: now all the details are displayed as they should be, without any problems.
			— Fixed an issue where the satiety index could not be an integer number. In addition, the general initial rates have been changed: the maximum satiety level has been reduced in the initial stages of the game.
			— Fixed an issue where at the beginning of the game session the grocery store might not have enough products of certain types.
			— Fixed some problems that the game could calculate your character's attributes incorrectly at certain moments of the game.
			— Fixed some perks in the game to work as they should now.
			— Fixed some stats on the effect of randomized NPCs, which were not always loaded when interacting with them.
			— Fixed some typos in Russian translation of the game.
			— Fixed errors in English translation of the game in some moments: inaccuracies, lack of translation in certain moments, typographical errors and exceptions, which occurred in very rare cases.
			— Fixed bug, connected with incorrect calculation of some statistics, which was connected with mechanics of fights.
			— Fixed bug, that caused some interactions with randomized NPCs to be excluded.
			— Fixed a bug which could lead to an exception during a long game session if the journalism club storyline was completed and the mechanics of the club's management were open.
		`,
	},
};

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

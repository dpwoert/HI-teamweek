export default {
	name: 'That\'s Me!',
	slug: 'thats-me',
	icon: 'images/01.svg',
	byline: 'A group activity for the first time a new team gets together to help them to know their teammates in a fun way.',
	description: 'Inspired by Milton Bradley’s game “Guess Who?”, it allows the team members to learn each other\'s names in an interactive and fun way. The idea is to create a memorable bond between team members upon their first meeting of each other. Players must find the person of a selected name by asking various “yes” or “no” questions such as, "Does this person wear glasses?" The people who don\'t match the description sit down until all but one is left standing, revealing the selected person.',
	category: 0,

	//from - to
	time: [10,60],

	//undefined for any amount of people, otherwise a number
	group: undefined || [20,100],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'List of names of the team members for the facilitator',
		'Chairs (optional) for the number of participants'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 1,

	steps: [
		'A facilitator is appointed to organise the game.',
		'The facilitator chooses a team member to become the first player.',
		'The rest of the team stands up as a group facing the player.',
		'It is important the facilitator explains nothing should be called out that may cause offence and sets rules about the type of yes-no questions the player can ask.',
		'The facilitator randomly chooses and reads out a team member\'s name. The player has to figure out who the team member is by asking yes-no questions.',
		'to begin, the player asks questions based on features e.g. “Does the person have blonde hair?”. The team members who don\'t match the description sit down until the named team member is left standing.',
		'The last one standing is then the next player.'
	],

	hyperlinks: [
		{label: "Guess Who", url: 'http://www.hasbro.com/en-gb/product/guess-who:2CE41484-19B9-F369-D94A-A92637F6C809'},
		{label: "Icon by Austin Condiff", url: 'https://thenounproject.com/acondiff/'}
	],

	attachment: undefined,

	teamName: 'Ice Ice Baby',
	teamMembers: [
		'@dominic',
		'@mario',
		'@mustafa',
		'@yann'
	]

};

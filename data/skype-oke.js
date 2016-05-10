export default {
	name: 'Skype-oke',
	slug: 'skype-oke',
	icon: 'images/06.svg',
	byline: 'A team activity to focus and synchronise the team. This is done by singing Karaoke over Skype or google hangout.',
	description: 'Teams often lose focus during projects, this is a group exercise to regain focus, encourage active listening, and collaborate with your teammates in a fun way. The group sings one song karoake style, each team member singing one line after the next, this is all done over google hangout or Skype! This task is aimed at remote workers, however it can also be adapted for the physical workplace.',
	category: 2,

	//from - to
	time: [10,20],

	//undefined for any amount of people, otherwise a number
	group: undefined || [3,10],

	//1: low, 2: mid, 3: high
	exp: [1,3],

	materials: [
		'Laptop or tablet',
		'Skype or Google Hangout'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 2,

	steps: [
		'Invite co­workers to google hangout and start video chat',
		'Go to www.hyperisland.com and select a song as a group',
		'Follow the link to the youtube video and re­arrange your screen to fit in google hangout and youtube video.',
		'Decide on order of singers. Each singer has to sing one line of the song then it passes to the next singer.',
		'Countdown. Then all the team must press play in time.',
		'SING!'

	],

	hyperlinks: [
		{label: "hyper island", url: 'http://www.hyperisland.com'}
	],

	attachment: undefined

};

export default {
	name: 'Skype-oke',
	slug: 'skype-oke',
	icon: 'images/06.svg',
	byline: 'A fun team activity to take a break, get silly and build team morale. This is done by singing karaoke over Skype or Google Hangout.',
	description: 'Skype-oke is a group exercise to collaborate with your teammates in a fun way. It can be done at any time during group work e.g. at the start of a team meeting. The team sings one song karaoke style. Each team member sings one line after the next (if team members are uncomfortable with singing they can mime the line instead). This is all done over Google Hangout or Skype! This task is aimed at remote workers, however it can also be adapted for the physical workplace.',
	category: 3,

	//from - to
	time: [10,10],

	//undefined for any amount of people, otherwise a number
	group: undefined || [3,10],

	//1: low, 2: mid, 3: high
	exp: [1],

	materials: [
		'Laptop or tablet',
		'Skype or Google Hangout',
		'Headphones'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 3,

	steps: [
		'Choose a facilitator. The facilitator invites the team to Google Hangout or Skype and starts a video chat.',
		'The facilitator picks a karaoke song from Youtube',
		'Find the desired song on Youtube (make sure to find a video with lyrics!) and share the video URL in the Google Hangout or Skype chat. Each team member should make sure to rearrange their screen to fit both the Google Hangout screen and the Youtube video.',
		['Decide on the order of singers and then give team members the following instructions:',
		'* Each team member has to sing one line of the song.',
		'* Then, the ‘microphone’ passes to the next member of the team to sing the next line.'
		],
		'The facilitator begins a verbal countdown. Then, everyone must press play on the Youtube video at the same time.',
		'SING!'

	],

	hyperlinks: [
		{label: "Icon by Mateo Zlatar", url: 'https://thenounproject.com/mateozlatar/'}
	],

	attachment: undefined,

	teamName: '',
	teamMembers: []

};

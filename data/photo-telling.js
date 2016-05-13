export default {
	name: 'Phototelling',
	slug: 'photo-telling',
	icon: 'images/08.svg',
	byline: 'An activity about sharing in which individuals tell stories around photos.',
	description: 'An ice breaker activity in which team members share a random photo from their phone and talk about it. Team members are encouraged to follow up with questions and conversations around the photo. The goal of this exercise: To get to know your new team through sharing a short uncurated story about yourself in a fun and easy way.',
	category: 0,

	//from - to
	time: [15,30],

	//undefined for any amount of people, otherwise a number
	group: undefined || [3,10],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Facilitator',
		'Smartphones'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 2,

	steps: [
		'If the group is larger than 10 people, split up into smaller teams.',
		'Choose a facilitator. The facilitator will pick a random person and ask that person to pick a number between 5 and 30.',
		'The facilitator asks the team members to take out their phones* and go to their photo gallery. Tell them to go to photo number X (chosen in Step 2), counting backwards from the most recent photo in the gallery. If the photo is offensive or too personal, it’s ok to go to the next most recent photo.',
		'Each team member will present their photo, starting with the facilitator.',
		'Encourage everyone involved to ask questions and have a brief conversation around each photo after each individual presentation. Examples:  _What do you think this tells us about you? Why did you take this photo? This photo made me think of… This made me feel..._',
		'Move clockwise around the room and continue until everyone has shared.'
	],

	hyperlinks: [
	{label: "Hyper Island Toolbox", url: 'http://toolbox.hyperisland.com/'},
	{label: "Icon by iconsphere", url: 'https://thenounproject.com/iconsphere/'}
	],

	attachment: undefined,

	teamName: 'Team Bahamas',
	teamMembers: [
		'@itwasrasmussen',
		'@Ideskafferiet',
		'@sydneyajohnson',
		'@LetiziaLodi'
	]

};

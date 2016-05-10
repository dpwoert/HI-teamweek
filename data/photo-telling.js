export default {
	name: 'Phototelling',
	slug: 'photo-telling',
	byline: 'An activity about sharing in which individuals tell stories around photos.',
	description: 'An icebreaking activity in which individuals must share a random photo from their phone and talk about it. Team members are encouraged to follow up with questions and conversations around the photo. The goal of this exercise: To get to know your new team through sharing a short uncurated story about yourself in a fun and easy way.',
	category: 0,

	//from - to
	time: [15,30],

	//undefined for any amount of people, otherwise a number
	group: undefined,

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Facilitator',
		'Smartphones'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 3,

	steps: [
		'If the group is larger than 10 people, split up into smaller teams.',
		'The facilitator will pick a random person and ask that person to pick a number between 5 and 30.',
		'Ask the team members to take out their phones and go to the photo gallery. Tell them to go to photo number X, (chosen in step. 2), counting backwards from the most recent photo in the gallery. If the photo is offensive or too personal, it’s ok to go to the next most recent photo.',
		'Each team member will present their photo, starting with the facilitator.',
		'Encourage everyone involved to ask questions and have a brief conversation around each photo after each individual presentation. Examples: What do you think this tells us about you? Why did you take this photo? This photo made me think of... This made me feel...',
		'Move clockwise around the room and continue until everyone has shared.'
	],

	hyperlinks: [ ],

	attachment: undefined

};

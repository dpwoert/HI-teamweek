export default {
	name: 'Energizers',
	slug: 'energizers',
	icon: 'images/02.svg',
	byline: 'Energizers are fun exercises to get your team going when energy levels are waning.',
	description: 'Energizers are great when your team needs a boost. They are suitable to use at any point throughout the day, or at the beginning of a meeting. Energizers promote positive interaction between team members, help them to bond and effectively boost enthusiasm and morale. Download our deck of energizers, cut them up and place them in a fishbowl so that you can quickly grab one when you need help getting your team moving.',
	category: 0,

	//from - to
	time: [5,15],

	//undefined for any amount of people, otherwise a number
	group: undefined || [5,10],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Printed energizer deck',
		'1 Fish bowl'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 1,

	steps: [
		'A facilitator is appointed as the energizer leader.',
		'Pick an energizer at random from your fishbowl and read the directions.',
		'Collect the relevant supplies, if any.',
		'Gather your team in an appropriate area.',
		'Read out the energizer directions to your team.',
		'Carry out the energizer and watch your team come back to life!'
	],

	hyperlinks: [
		{label: "Hyper Island toolbox", url: 'http://toolbox.hyperisland.com/'}
	],

	attachment: 'attachments/02_Energizers.pdf',

	teamName: 'Victorious Secret',
	teamMembers: [
		'@morley_laura',
		'@Jvb_nl',
		'@NatashMcNamara',
		'@TweetToRoni'
	]

};

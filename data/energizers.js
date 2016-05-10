export default {
	name: 'Energizers',
	slug: 'energizers',
	byline: 'Energizers are fun exercises to get your team going when energy levels are waning.',
	description: 'Energizers are great when your team needs a boost. They are suitable to use at any point throughout the day, or at the beginning of a meeting. Energizers promote positive interaction between team members, help them to bond and effectively boost enthusiasm and morale. Download our deck of energizers, cut them up and place them in a fishbowl so that you can quickly grab one when you need help getting your team moving.',
	category: 0,

	//from - to
	time: [30,60],

	//undefined for any amount of people, otherwise a number
	group: undefined || [5,10],

	//1: low, 2: mid, 3: high
	exp: 3,

	materials: [
		'paper',
		'pencil'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 3,

	steps: [
		'jnbngknbjn',
		'grjnbgrkjbngrbkjgn'
	],

	hyperlinks: [
		{label: "hyper island", url: 'http://www.hyperisland.com'},
		{label: "team week", url: 'http://www.teamweek.com'}
	],

	attachment: 'url.jpg'

};

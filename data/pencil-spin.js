export default {
	name: 'Pencil Spin',
	slug: 'pencil-spin',
	icon: 'images/10.svg',
	byline: 'A fun and simple tool to start facilitate a good open team culture that will be used for breaks and bonding.',
	description: 'A teambuilding activity to help team members discuss their activities and what they love doing outside of the team environment. Each team member writes down an activity for both a 5-10 minute break or a long team bonding activity. A pencil or pen is spun in the middle to make a choice . WIth minimal materials and using funny activities teams can create an interactive way to bond and take breaks. This simple idea takes away the guesswork and makes team bonding easy, fun and simple.',
	category: 3,

	//from - to
	time: [20,40],

	//undefined for any amount of people, otherwise a number
	group: undefined || [2,12],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'A4 sheet of paper',
		'Pencil or Pen'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 3,

	steps: [
		'Gather the group ',
		'Each member adds a break and bonding activity. Breaks are short activities taking 5-10 min. Bonding activities are longer 2-3 hour events',
		'Have a discussion on each members chosen activity to get to know each other better.',
		'Choose which activity a break or bonding event the team want to participate in',
		'One team member takes a pen or pencil and spins it in the middle to a choose the activity',
		'The activity is chosen when the pencil or pen stops and the nip is pointing to the activity',
		'Team takes a break or goes on a bonding activity.'
	],

	hyperlinks: [],

	attachment: undefined

};

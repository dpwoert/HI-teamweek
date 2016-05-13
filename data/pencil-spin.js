export default {
	name: 'Pencil Spin',
	slug: 'pencil-spin',
	icon: 'images/10.svg',
	byline: 'A tool that helps plan and implement social activities to build team culture.',
	description: 'Social activities help strengthen bonds in a team, however executing these plans can be tedious and frustrating. With the help of this simple tool a team can easily find a fun social activity for the next team event. To create the tool each team member writes down an activity on a post-it and adds it to the Spin the Pencil template. When it’s time to pick a new activity to do together simply spin a pencil in the middle of the template and see what activity the pencil nib lands on. This simple idea takes away the decision making and makes team bonding easier to plan',
	category: 2,

	//from - to
	time: [20,40],

	//undefined for any amount of people, otherwise a number
	group: undefined || [2,12],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Spin the pencil PDF',
		'Post Its',
		'Pens or pencils'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 1,

	steps: [
		'A facilitator gathers the group.',
		'Each member adds an idea of a bonding activity on a post-it.',
		'Facilitator creates a circle for placing the post-its on a table.',
		'One team member takes a pen or pencil and spins it in the middle. The activity is chosen when the pencil or pen stops and the nib is pointing to a post-it.',
		'Team team indulges in a quick activity or plans for a long duration activity, as applicable.',
		'The activity is chosen when the pencil or pen stops and the nip is pointing to the activity',
		'Team takes a break or goes on a bonding activity.'
	],

	hyperlinks: [],

	attachment: 'attachments/10_Spin_the_Pencil.pdf',

	teamName: '',
	teamMembers: []

};

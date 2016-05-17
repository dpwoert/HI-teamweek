export default {
	name: 'Team Bonding',
	slug: 'team-bonding',
	icon: 'images/04.svg',
	byline: 'Team bonding is an important element of a productive workplace. Help your team to foster great culture by connecting outside of the traditional office setting using our team bonding exercises.',
	description: 'Team bonding activities promote fun and connectedness within your team by allowing team members to connect in a different setting. By helping your team to create genuine bonds and enjoy each other’s company, you can help to enrich their communication skills and collaboration capabilities. Use our set of suggested team bonding exercises and add your own to keep things interesting. Download the PDF of team bonding exercises, cut them up and place them in a fishbowl so that you can have instant access to some great ideas when it comes to planning your next team outing.',
	category: 3,

	//from - to
	time: [30,60],

	//undefined for any amount of people, otherwise a number
	group: undefined || [2,200],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Printed team bonding PDF',
		'1 Fish bowl'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 1,

	steps: [
		'A facilitator is appointed as the activity leader.',
		'Pick a bonding exercise at random from your fishbowl and read the directions.',
		'Send out an invite to your team in advance.',
		'Gather the supplies you need and reserve a space to do the activity.',
		'Gather your team and explain the activity.',
		'Get to it, and have fun!'
	],

	hyperlinks: [
		{label: "hyper island", url: 'http://www.hyperisland.com'},
		{label: "teamweek", url: 'http://www.teamweek.com'}
	],

	attachment: 'attachments/4.pdf',

	teamName: '',
	teamMembers: []

};

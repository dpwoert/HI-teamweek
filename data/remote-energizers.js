export default {
	name: 'Remote Energizers',
	slug: 'remote-energizers',
	icon: 'images/03.svg',
	byline: 'These remote energizers use a Slack bot in your team Slack channel so that you can ask your bot to generate an activity for when your remote team needs an energy boost.',
	description: 'Energizers are great when your team needs a boost. They are suitable to use at any point throughout the day, or at the beginning of a meeting. Energizers promote positive interaction between team members, help them to bond and effectively boost enthusiasm and morale. Download the Slack bot and add it to your team Slack account. Then, when you feel like your remote team needs an occasion to connect or a boost in concentration, you can ask your bot to send you an idea for a fun energizer.',
	category: 0,

	//from - to
	time: [5,15],

	//undefined for any amount of people, otherwise a number
	group: undefined || [2,200],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Energizer Slackbot'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 1,

	steps: [
		'A facilitator is appointed as the energizer leader.',
		'Ask the Slack bot to generate a random energizer and read the directions.',
		'Call your team to a Slack check-in.',
		'Post the energizer directions to your team.',
		'Carry out the energizer and feel your team come back to life!'
	],

	hyperlinks: [
		{label: "Energizer SlackBot", url: 'https://slack.com/oauth/authorize?scope=bot%2Cteam%3Aread&redirect_uri=https%3A%2F%2Fmeya.ai%2Fbreakbot%2Foauth&client_id=41299434624.41573475956'},
		{label: "Icon by Yorlmar Campos", url: 'https://thenounproject.com/Yorlmar%20Campos/'}
	],

	attachment: 'attachments/03_Remote_Energizers.pdf',

	teamName: 'Victorious Secret',
	teamMembers: [
		'@morley_laura',
		'@Jvb_nl',
		'@NatashMcNamara',
		'@TweetToRoni'
	]

};

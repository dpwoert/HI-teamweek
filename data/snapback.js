export default {
	name: 'Snapback',
	slug: 'snapback',
	icon: 'images/07.svg',
	byline: 'Use Snapchat to give and receive feedback in a quick, fun and easy way.',
	description: 'The snapback tool is designed to help teams work more effectively by sharing regular feedback. Team members use Snapchat to give and receive specific feedback from one another. The Snapchat medium mitigates the anxiety some team members may feel when asked to give feedback.',
	category: 1,

	//from - to
	time: [15, 20],

	//undefined for any amount of people, otherwise a number
	group: [2,5],

	//1: low, 2: mid, 3: high
	exp: 2,

	materials: [
		'Smartphone',
		'Snapchat App'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 2,

	steps: [
		'Have all of your team members download Snapchat, create an account and share their usernames with the team.',
		'Assist all team members in adding each other on Snapchat and show how it works. Show members how to use filters, emojis, text, how to adjust the snap time limit, and how to create videos.',
		'Select and agree on a timeframe for giving and receiving feedback. We suggest to give feedback after each sprint or benchmark, but feel free to hack it!',
		'Refer to the References section for effective feedback guidelines',
		[
		'Instruct the team to send a snapback to each team member and to follow the feedback instructions below.',
		'1. The snap can either be a video or a picture.',
		'2. In the snap(s), complete the following sentences to give teammates constructive feedback:',
		'..- One thing I appreciate about you is…',
		'..- One thing I’d like to see more of is…',
		'3. Remember to speak from the ‘I’.'
		],
		'To get the most out of feedback, pay attention to the snapbacks you receive because the snap is quick and can only be shown twice. Take notes after receiving feedback and keep it in a safe place where it can be referred back to. Reflect on the feedback--think about how it can be applied to your next team or project.'

	],

	hyperlinks: [
		{label: "Principles of Effective Feedback", url: 'http://toolbox.hyperisland.com/principles-of-effective-feedback'},
		{label: "Marshall Rosenberg’s four-part feedback process ", url: 'http://www.nonviolentcommunication.com/aboutnvc/4partprocess.htm'},
		{label: "Icon by Till Teenck", url: 'https://thenounproject.com/tillt/'}
	],

	attachment: undefined,

	teamName: '',
	teamMembers: [
		'@clara',
		'@mayra',
		'@susanne',
		'@antoine',
		'@mira'
	]

};

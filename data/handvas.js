export default {
	name: 'Handvas',
	slug: 'handvas',
	icon: 'images/05.svg',
	byline: 'The Handvas uses the recognizable symbol of a hand and fingers, enables the team to share personal needs and expectations, and then allows the team to summarize the culture in a quick and fun way.',
	description: 'A quick tool for building team culture, focusing on each person’s strengths, goals, and things to avoid. Each member draws an outline of a hand and fills the fingers with words equivalent to the finger‘s function (thumb for strengths, pinky for what makes you feel little etc.). The team shares their hands and discusses what was said, which is the core of the exercise. As a finisher the team comes up with a catchy “film” title that summarizes the culture.',
	category: 3,

	//from - to
	time: [20,40],

	//undefined for any amount of people, otherwise a number
	group: undefined || [3,10],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Paper',
		'Pen, pencil, or markers'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 2,

	steps: [
		'Each member draws an outline of their hand.',

		[
			'Write one or a few words in each finger (~5 mins). ',
			'* _Thumb:_ strengths (e.g. critical thinker, good listener) Index finger – goals (e.g. thinking tools, portfolio pieces)',
			'* _Middle finger:_ what annoys you (e.g. lack of trust); Ring finger – what makes you loyal (e.g. commitment)',
			'* _Pinky finger:_ what makes you feel small (e.g. being condescended and shut down)',
			'* _Palm:_ something you want to open up about (e.g. feeling stressed about another deadline)'
		],

		'Team members share their hands with the other team members (3 mins per hand)',
		'The team discusses how to work together in order to enable as many strengths and avoid as many annoyances as possible during the upcoming project (15 mins).',
		'To make the outcome memorable and to anchor the important things having been shared, the team comes up with a catchy “film” title that represents the team culture (3 mins).'

	],

	hyperlinks: [
		{label: "Handcanvas", url: 'http://toolbox.hyperisland.com'}
	],

	attachment: undefined,

	teamName: '',
	teamMembers: [
		'@_stefanjost',
		'@janovem'
	]

};

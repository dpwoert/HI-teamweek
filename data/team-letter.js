export default {
	name: 'Dear Team',
	slug: 'dear-team',
	icon: 'images/09.svg',
	byline: 'An activity to help you open up to your team and encourage you to share.',
	description: 'A culture building activity designed to help you form quick but lasting bonds by sharing information about yourself and your experiences. In this exercise you will spend 20 minutes writing a letter to your team. There are suggested questions to help you get started if you need inspiration. The goal of the exercise is to help your team understand who you are, your background and what motivates you. There are three letter templates for different stages of your project. Dear New Team for the project kickoff, Dear Team for mid-project check-ins and Dear Future Team to end the project and look forward to your next team.',
	category: 2,

	//from - to
	time: [100,120],

	//undefined for any amount of people, otherwise a number
	group: [10,15],

	//1: low, 2: mid, 3: high
	exp: 1,

	materials: [
		'Dear Team template letter',
		'Pencil or pens',
		'Envelopes'
	],

	//1: low, 2: mid, 3: high
	comfortZone: 2,

	steps: [
		'Choose a facilitator.',
		'Print out the appropriate copies of the ‘Dear Team’ letter template associated with your project stage (kickoff, mid-project or end of project). Provide each team member with a template.',
		[
		'The facilitator should explain the goal of the activity and give the following instructions:',
		'* The letter is designed to help each of the team members be open and honest about themselves and to share information about their lives and build a bond with the other team members.',
		'* They will have 20 minutes to write their letters (if the team struggles with the task an extra 10 minutes can be given).',
		'* At the end of the 20 minutes everyone will have the opportunity to read their letter aloud to the room.'
		],
		'Next, team members should start reading the template they’ve been provided. Sharing and being open may be outside of some team members comfort zones, so helpful prompts have been provided at the bottom of the template. The facilitator should be prepared to answer questions and ensure everyone knows it is a safe space.',
		'After 20 minutes stop the participants and ask them to stand in a circle ready to share their letter with the rest of the team.',
		'Ask everyone in turn to read their letter aloud. If a team member does not feel comfortable sharing that is ok, but encourage everyone to participate. After everyone has shared their letter, encourage the group to ask questions. Be careful to ensure this doesn’t turn into a debate. It’s important for everyone to know their voice is heard and that there is no judgement.',
		'To wrap up the exercise have a short round of applause and thank everyone for being so open. We suggest you have a team bonding exercise or social activity afterwards so the team can have fun and build upon their new understanding of each other.'

	],

	hyperlinks: [ ],

	attachment: 'attachments/team_letters.pdf',

	teamName: '',
	teamMembers: [
		'@lisasibbing',
		'@nadinekriegelstein'
	]

};

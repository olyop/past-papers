const globals = {

	api: 'http://localhost:3001',
	aws: 'https://s3-ap-southeast-2.amazonaws.com/hsc-past-papers',

	subjectPages: [
		{
			name: 'Questions',
			icon: 'question_answer',
			path: '/questions'
		},
		{
			name: 'Past Papers',
			icon: 'insert_drive_file',
			path: '/past-papers'
		},
		{
			name: 'Resources',
			icon: 'book',
			path: '/resources'
		},
		{
			name: 'Info',
			icon: 'info',
			path: '/info'
		}
	],

	searchFilters: [
		{
			name: 'Query Type',
			key: 'queryType',
			type: 'radio-button-selection',
			buttons: [
				{
					name: 'School',
					key: 'school'
				},
				{
					name: 'Year',
					key: 'year'
				},
				{
					name: 'Questions',
					key: 'questions'
				},
				{
					name: 'Topics',
					key: 'topics'
				}
			]
		},
		{
			name: 'Source',
			key: 'source',
			type: 'check-boxes',
			filters: [
				{
					name: 'NESA',
					key: 'nesa',
					value: true
				},
				{
					name: 'External',
					key: 'external',
					value: true
				}
			]
		},
		{
			name: 'Paper Type',
			key: 'paperType',
			type: 'check-boxes',
			filters: [
				{
					name: 'HSC',
					key: 'hsc',
					value: true
				},
				{
					name: 'Trials',
					key: 'trials',
					value: true
				},
				{
					name: 'Half Yearlies',
					key: 'halfYearlies',
					value: true
				}
			]
		}
	],

	dataDictionary: {

		pastPaper: [
			{
				property: 'year',
				name: 'Year',
				required: true,
				type: 'number',
				default: '',
				placeholder: 'Year of paper...'
			},
			{
				property: 'source',
				name: 'Source',
				required: true,
				type: 'string',
				options: [
					{ key: 'nesa', name: 'NESA', },
					{ key: 'external', name: 'External' }
				]
			},
			{
				property: 'school',
				name: 'School',
				required: true,
				type: 'string',
				default: '',
				placeholder: 'Name of school...'
			},
			{
				property: 'paperType',
				name: 'Paper Type',
				required: true,
				type: 'string',
				options: [
					{ key: 'hsc', name: 'HSC', },
					{ key: 'trails', name: 'Trials' },
					{ key: 'halfYearlies', name: 'Half Yearlies' }
				]
			},
			{
				property: 'sections',
				name: 'Sections',
				required: true,
				type: 'array',
				element: 'section',
				default: []
			}
		],

			section: [
				{
					property: 'num',
					name: 'Number',
					type: 'string',
					required: true,
					default: '',
					placeholder: 'Section number...'
				},
				{
					property: 'marks',
					name: 'Marks',
					type: 'number',
					required: true,
					default: '',
					placeholder: 'Marks in section...'
				},
				{
					property: 'time',
					name: 'Time',
					type: 'number',
					required: true,
					default: '',
					placeholder: 'Time allocated to section...'
				},
				{
					property: 'questions',
					name: 'Questions',
					type: 'array',
					required: true,
					element: 'question',
					default: []
				}
			],

				question: [
					{
						property: 'num',
						name: 'Number',
						type: 'string',
						required: true,
						default: ''
					},
					{
						property: 'subQuestions',
						name: 'Sub Questions',
						type: 'array',
						required: true,
						element: 'subQuestion',
						default: []
					}
				]

	},

	templates: {

		pastPaper: {
			year: '',
			school: '',
			source: null, // nesa, external
			paperType: null, // hsc, trials, halfYearlies
			sections: []
		},

			section: {
				marks: '',
				time: '',
				questions: []
			},

				question: {
					num: '',
					type: null, // mc, sa
					question: null
				},

					mc: {
						num: '',
						content: [],
						choices: []
					},

					sa: {
						subQuestions: []
					},

					subQuestion: {
						letter: '',
						content: [],
						parts: []
					},

					part: {
						num: '',
						content: []
					},

					content: {
						type: null, // text, diagram
						centered: false,
						content: null
					}

	}

}

export default globals

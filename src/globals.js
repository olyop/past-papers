const gbl_api = 'http://localhost:3001'

const gbl_aws = 'https://s3-ap-southeast-2.amazonaws.com/hsc-past-papers'

const gbl_subjectPages = [
	{
		name: 'Questions',
		path: '/questions',
		icon: 'question_answer'
	},{
		name: 'Past Papers',
		path: '/past-papers',
		icon: 'insert_drive_file'
	},{
		name: 'Resources',
		path: '/resources',
		icon: 'book'
	},{
		name: 'Info',
		path: '/info',
		icon: 'info'
	}
]

const gbl_manageDatabasePages = [
	{
		name: 'View Database',
		path: 'view-database',
		icon: 'view_list'
	}, {
		name: 'Add Past Paper',
		path: 'add-past-paper',
		icon: 'add'
	}
]

const gbl_searchFilters = [
	{
		name: 'Query Type',
		key: 'queryType',
		type: 'radio-button-selection',
		buttons: [
			{
				name: 'School',
				key: 'school'
			},{
				name: 'Year',
				key: 'year'
			},{
				name: 'Questions',
				key: 'questions'
			},{
				name: 'Topics',
				key: 'topics'
			}
		]
	},{
		name: 'Source',
		key: 'source',
		type: 'check-boxes',
		filters: [
			{
				name: 'NESA',
				key: 'nesa',
				value: true
			},{
				name: 'External',
				key: 'external',
				value: true
			}
		]
	},{
		name: 'Paper Type',
		key: 'paperType',
		type: 'check-boxes',
		filters: [
			{
				name: 'HSC',
				key: 'hsc',
				value: true
			},{
				name: 'Trials',
				key: 'trials',
				value: true
			},{
				name: 'Half Yearlies',
				key: 'halfYearlies',
				value: true
			}
		]
	}
]

const gbl_dataDictionary = {
	pastPaper: [
		{
			property: 'source',
			name: 'Source',
			required: true,
			type: 'string',
			options: [
				{ key: 'nesa', name: 'NESA', },
				{ key: 'external', name: 'External' }
			]
		},{
			property: 'paperType',
			name: 'Paper Type',
			required: true,
			type: 'string',
			options: [
				{ key: 'hsc', name: 'HSC', },
				{ key: 'trails', name: 'Trials' },
				{ key: 'halfYearlies', name: 'Half Yearlies' }
			]
		},{
			property: 'subject',
			name: 'Subject',
			required: true,
			type: 'string',
			options: [],
			externalOptions: 'subjects'
		},{
			property: 'year',
			name: 'Year',
			required: true,
			type: 'number',
			default: '',
			placeholder: 'Year of paper...'
		},{
			property: 'school',
			name: 'School',
			required: true,
			type: 'string',
			default: '',
			placeholder: 'Name of school...'
		},{
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
		},{
			property: 'marks',
			name: 'Marks',
			type: 'number',
			required: true,
			default: '',
			placeholder: 'Marks in section...'
		},{
			property: 'time',
			name: 'Time',
			type: 'number',
			required: true,
			default: '',
			placeholder: 'Time allocated to section...'
		},{
			property: 'questions',
			name: 'Questions',
			required: true,
			type: 'array',
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
		},{
			property: 'subQuestions',
			name: 'Sub Questions',
			type: 'array',
			required: true,
			element: 'subQuestion',
			default: []
		}
	]
}

export {
	gbl_api,
	gbl_aws,
	gbl_subjectPages,
	gbl_manageDatabasePages,
	gbl_searchFilters,
	gbl_dataDictionary
}

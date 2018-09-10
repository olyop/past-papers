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
	]
}

export default globals

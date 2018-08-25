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
			name: 'Query-Type',
			type: 'radio-button-selection',
			buttons: [
				'Test-Name',
				'Questions',
				'Topics'
			]
		},
		{
			name: 'Paper-Type',
			type: 'check-boxes',
			filters: [
				{
					name: 'HSC',
					value: true
				},
				{
					name: 'Trials',
					value: true
				},
				{
					name: 'Half-Yearlies',
					value: true
				}
			]
		},
		{
			name: 'Source',
			type: 'check-boxes',
			filters: [
				{
					name: 'NESA',
					value: true
				},
				{
					name: 'External',
					value: true
				}
			]
		},
		{
			name: 'Question-Type',
			type: 'check-boxes',
			filters: [
				{
					name: 'MC',
					value: true
				},
				{
					name: 'SA',
					value: true
				}
			]
		}
	]

}

export default globals

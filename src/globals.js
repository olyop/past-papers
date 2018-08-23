const globals = {
	api: 'http://localhost:3001',
	aws: 'https://s3-ap-southeast-2.amazonaws.com/hsc-past-papers',
	subjectPages: [
		{ name: 'Questions', icon: 'question_answer', path: '/questions' },
		{ name: 'Past Papers', icon: 'insert_drive_file', path: '/past-papers' },
		{ name: 'Resources', icon: 'book', path: '/resources' },
		{ name: 'Info', icon: 'info', path: '/info' }
	]
}

export default globals

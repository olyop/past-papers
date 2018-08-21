const globals = {
	api: 'http://localhost:3001',
	aws: 'https://s3-ap-southeast-2.amazonaws.com/hsc-past-papers',
	subjectPages: [
		{ name: 'QUESTIONS', icon: 'question_answer', path: 'questions' },
		{ name: 'PAST PAPERS', icon: 'insert_drive_file', path: 'past-papers' },
		{ name: 'RESOURCES', icon: 'book', path: 'resources' },
		{ name: 'ABOUT', icon: 'info', path: 'about' }
	]
}

export default globals

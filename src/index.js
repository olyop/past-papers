// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './react/registerServiceWorker'

// Import Components
import SubjectSelection from './components/misc/SubjectSelection'
import MathsAdvanced from './components/subjects/MathsAdvanced/MathsAdvanced'
import MathsExt1 from './components/subjects/MathsExt1/MathsExt1'

// Import CSS
import 'normalize.css/normalize.css'
import './index.css'

class Index extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { subject: null }
	}
	
	render() {
		if (this.state.subject === null) {
			return <SubjectSelection />
		} else if (this.state.subject === 0) {
			return <MathsAdvanced />
		} else if (this.state.subject === 1) {
			return <MathsExt1 />
		} else {
			return null
		}
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
)

registerServiceWorker()
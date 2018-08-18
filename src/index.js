// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './react/registerServiceWorker'

// Import Globals
import globals from './globals'

// Import functions
import axios from 'axios'

// Import Components
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Loading from './components/common/Loading'
import SubjectSelection from './components/SubjectSelection'
import MathsAdvanced from './components/subjects/MathsAdvanced'
import MathsExt1 from './components/subjects/MathsExt1'
import MathsExt2 from './components/subjects/MathsExt2'

// Import CSS
import 'normalize.css/normalize.css'
import './index.css'

const Subjects = props => {
	if (props.subjects === null) {
		return <Loading />
	} else if (props.subjects.constructor === Array) {
		return (
			<div>
				{props.subjects.map(subject => (
					<Route key={subject.key}
						path={`/subjects/${subject.abbreviation}`}
						render={({ match, location }) => {
							if (subject.key === 'GKvfvjbZsc') {
								return <MathsAdvanced />
							} else if (subject.key === 'dhRkSziwwp') {
								return <MathsExt1 />
							} else if (subject.key === 'VeRLrzucwI') {
								return <MathsExt2 />
							}
						}} />
				))}
			</div>
		)
	} else if (props.subjectsHasError) {
		return <p>{props.subjects}</p>
	}
}

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			subjects: null,
			subjectsHasError: false
		}
	}
  componentDidMount() {
    axios({
			method: 'get',
			url: `${this.props.globals.api}/subjects`
		})
		.then(response => this.setState({ subjects: response.data }))
    .catch(error => this.setState({ subjects: error, subjectsError: true }))
  }
	render() {
		return (
			<BrowserRouter>
				<div id="index">

					<Header />

					<Route path="/" exact render={({ match, location }) => (
						<SubjectSelection globals={this.props.globals}
							subjects={this.state.subjects}
							subjectsHasError={this.state.subjectsHasError} />
					)} />

					<Route path="/subjects" render={({ match, location }) => (
						<div className="window">
							<Subjects globals={this.props.globals}
								subjects={this.state.subjects}
								subjectsHasError={this.state.subjectsHasError} />
						</div>
					)} />

				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<Index globals={globals}/>,
	document.getElementById('root')
)

registerServiceWorker()

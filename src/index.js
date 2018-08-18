// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './react/registerServiceWorker'

// Import globals
import globals from './globals'

// Import functions
import axios from 'axios'

// Import React-Router
import { BrowserRouter, Route } from 'react-router-dom'

// Import components
import Header from './components/Header'
import SubjectSelection from './components/SubjectSelection'
import Subjects from './components/Subjects'

// Import CSS
import 'normalize.css/normalize.css'
import './index.css'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			subjects: null,
			subjectsHasError: false,
			hamburger: false
		}
		this.handleHamburger = this.handleHamburger.bind(this)
	}
  componentDidMount() {
    axios({ url: `${this.props.globals.api}/subjects` })
			.then(response => this.setState({ subjects: response.data }))
    	.catch(error => this.setState({ subjects: error, subjectsError: true }))
  }
	handleHamburger() {
		this.setState({ hamburger: !this.state.hamburger })
	}
	render() {
		return (
			<BrowserRouter>
				<div id="index">

					<Header globals={this.props.globals}
						hamburger={this.state.hamburger}
						handleHamburger={this.handleHamburger} />

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

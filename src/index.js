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
import Menu from './components/Menu'
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
			subjectsError: {},
			menu: false
		}
		this.home = this.home.bind(this)
		this.handleMenu = this.handleMenu.bind(this)
	}
  componentDidMount() {
    axios({ url: `${this.props.globals.api}/subjects` })
			.then(response => this.setState({ subjects: response.data }))
    	.catch(error => {
				this.setState({
					subjectsHasError: true,
					subjectsError: {
						message: error.message,
						...error
					}
				})
			})
  }
	home() {
		let haveSubjectsLoaded = this.state.subjectsHasError ? false : true
		this.setState({
			subjects: haveSubjectsLoaded ? this.state.subjects : null,
			subjectsHasError: false,
			subjectsError: {},
			menu: false
		})
		if (!haveSubjectsLoaded) {
			this.componentDidMount()
		}
	}
	handleMenu() {
		this.setState({ menu: !this.state.menu })
	}
	render() {
		return (
			<BrowserRouter>
				<div id="index">

					<Header
						globals={this.props.globals}
						home={this.home}
						menu={this.state.menu}
						handleMenu={this.handleMenu}
					/>

					<div className="window">
						{this.state.menu ? (
							<Menu
								globals={this.props.globals}
							/>
						) : null}
						<div className={`content${this.state.menu ? ' content-menu-active' : ''}`}>
							<Route path="/" exact render={({ match, location }) => (
								<SubjectSelection
									globals={this.props.globals}
									subjects={this.state.subjects}
									subjectsHasError={this.state.subjectsHasError}
									subjectsError={this.state.subjectsError}
								/>
							)} />
							<Route path="/subjects" render={({ match }) => (
								<Subjects
									globals={this.props.globals}
									subjects={this.state.subjects}
									subjectsHasError={this.state.subjectsHasError}
									subjectsError={this.state.subjectsError}
									match={match}
								/>
							)} />
						</div>
					</div>

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

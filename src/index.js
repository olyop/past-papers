// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './react/registerServiceWorker'

// Import globals
import { gbl_api } from './globals'

// Import functions
import axios from 'axios'

// Import React-Router
import { BrowserRouter } from 'react-router-dom'

// Import components
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'

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
    axios({ url: `${gbl_api}/subjects` })
			.then(response => this.setState({
				subjects: response.data
			}))
    	.catch(error => this.setState({
				subjectsError: { message: error.message, ...error	},
				subjectsHasError: true
			}))
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
				<div id="Index">
					<Header
						home={this.home}
						menu={this.state.menu}
						handleMenu={this.handleMenu}
					/>
					<div className="window">
						{this.state.menu ? <Menu handleMenu={this.handleMenu} /> : null}
						<Content
	            subjects={this.state.subjects}
	            subjectsHasError={this.state.subjectsHasError}
	            subjectsError={this.state.subjectsError}
							menu={this.state.menu}
						/>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
)

registerServiceWorker()

import React from 'react'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Paper, Typography, Container, Button, ButtonGroup, TextField } from '@material-ui/core'
import Storage from './components/storage'
import { HeaderNoLogin } from './components/header'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.theme = createMuiTheme()
		this.theme = responsiveFontSizes(this.theme)
		this.storage = new Storage()
		this.storage.setTitle('Welcome to CourseGram')
		this.setUsername = this.setUsername.bind(this)
		this.setPassword = this.setPassword.bind(this)
		this.login = this.login.bind(this)
		this.signUp = this.signUp.bind(this)
		this.username = null
		this.password = null
	}

	setUsername(e) {
		e.preventDefault()
		this.username = e.target.value
	}

	setPassword(e) {
		e.preventDefault()
		this.password = e.target.value
	}

	login(e) {
		e.preventDefault()
		// Validate against profile username and password on server
		// code below requires server call
		if (this.storage.getNumberOfProfiles() == 0) {
			this.storage.createDefaultUser()
			this.storage.createDefaultAdmin()
		}
		if (this.username == null || this.password == null) {

		}
		if (this.storage.login(this.username, this.password)){
			if (this.storage.profile.admin) {
				window.location.href = 'admin'
			} else {
				window.location.href = 'home'
			}
		} else {
		}
	}

	signUp(e) {
		e.preventDefault()
		window.location.href = 'sign-up'
	}

	render() {
		return (
			<div>
				<HeaderNoLogin/>
				<ThemeProvider theme={this.theme}>
					<form>
						<TextField label='Username' variant='outlined' onChange={(e) => this.setUsername(e)}/>
						<TextField label='Password' type='password' variant='outlined' onChange={(e) => this.setPassword(e)}/>
						<Button type='submit' onClick={(e) => this.login(e)}>Login</Button>
					</form>
				</ThemeProvider>
			</div>
		)
	}
}
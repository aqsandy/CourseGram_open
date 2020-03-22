import React from 'react'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Button, ButtonGroup, AppBar } from '@material-ui/core'
import Storage from './storage'

export class Header extends React.Component {
	constructor(props) {
		super(props)
		this.theme = createMuiTheme()
		this.theme = responsiveFontSizes(this.theme)
		this.storage = new Storage()
		this.goHome = this.goHome.bind(this)
		this.goProfile = this.goProfile.bind(this)
	}

	goHome(e) {
		e.preventDefault()
		window.location.href = 'home'
	}

	goProfile(e) {
		e.preventDefault()
		if (this.storage.profile != null) {
			if (this.storage.profile.admin) {
				window.location.href = 'admin'
			} else {
				window.location.href = 'profile'
			}
		}
	}

	goLogin(e) {
		e.preventDefault()
		window.location.href = 'login'
	}

	render() {
		const menu = []

		menu.push(
			<Button>
				<Typography variant='button' onClick={(e) => this.goHome(e)}>CourseGram</Typography>
			</Button>
		)
		menu.push(
			<Typography variant='h3'>{this.storage.getTitle()}</Typography>
		)

		if (this.storage.profile != null) {
			menu.push(
				<Button>
					<Typography variant='button' onClick={(e) => this.goProfile(e)}>{this.storage.getUsername()}</Typography>
				</Button>
			)
		} else {
			menu.push(
				<Button>
					<Typography variant='button' onClick={(e) => this.goLogin(e)}>Login / Sign Up</Typography>
				</Button>
			)
		}

		return (
			<ThemeProvider theme={this.theme}>
				<AppBar style={{position: 'static'}}>
					<ButtonGroup>
						{menu}
					</ButtonGroup>
				</AppBar>
			</ThemeProvider>
		)
	}
}

export class HeaderNoLogin extends Header {
	render() {
		const menu = []

		menu.push(
			<Button>
				<Typography variant='button' onClick={(e) => this.goHome(e)}>CourseGram</Typography>
			</Button>
		)
		menu.push(
			<Typography variant='h3'>{this.storage.getTitle()}</Typography>
		)

		return (
			<ThemeProvider theme={this.theme}>
				<AppBar style={{position: 'static'}}>
					{menu}
				</AppBar>
			</ThemeProvider>
		)
	}
}
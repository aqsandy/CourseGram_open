import React from 'react'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container, Button, ButtonGroup } from '@material-ui/core'
import Storage from './components/storage'
import { Header } from './components/header'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.theme = createMuiTheme()
		this.theme = responsiveFontSizes(this.theme)
		this.storage = new Storage()
		this.storage.setTitle('Welcome to CourseGram')
		this.goProgram = this.goProgram.bind(this)
	}

	goProgram(e) {
		e.preventDefault()
		const list = e.target.parentElement
		for (let i = 0; i < list.children.length; i++) {
			if (list.children[i] == e.target) {
				this.storage.setProgram(i)
				window.location.href = 'program.html'
			}
		}
	}

	loadPrograms() {
		const buttons = []
		if (this.storage.programs == null) {
			this.storage.createProgramPush('Major in Architectural Studies', 'AHMAJ1000')
		}
		for (let i = 0; i < this.storage.programs.length; i++) {
			const programName = this.storage.getProgramName(i)
			const programCode = this.storage.getProgramCode(i)
			buttons.push(
				<Button variant='contained' color='primary' onClick={(e) => this.goProgram(e)}>
					<Typography variant='button'>{programName + ' (' + programCode + ')'}</Typography>
				</Button>
			)
		}
		return (
			<ButtonGroup orientation='vertical' color='primary'>
				{buttons}
			</ButtonGroup>
		)
	}

	render() {
		return (
			<div>
				<Header/>
				<ThemeProvider theme={this.theme}>
					<Typography variant='h4'>Programs</Typography>
					{this.loadPrograms()}
				</ThemeProvider>
			</div>
		)
	}
}



import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './home'
import Login from './login'

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path ='/' component={Home}/>
				<Route path ='/home' component={Home}/>
				<Route path = '/login' component={Login}/>
			</Switch>
		</Router>
	)
}
/* @flow */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Compotnents Imports
import Header from '../components/Header';
import About from '../components/About';
import Html from '../components/Html';
import JavaScript from '../components/JavaScript';
import TicTacToe from '../components/TicTacToe';
import Todo from '../components/Todo';
import NotFound from '../components/NotFound';
import Design from '../components/Design';

class App extends Component {
  render() {
    return (
    	<Router>
        <Header />

        <Switch>
	        <Route exact path='/' component={About} />
	        <Route path='/html-css' component={Html} />
	        <Route path='/javaScript' component={JavaScript} />
	        <Route path='/tic-tac-toe' component={TicTacToe} />
	        <Route path='/todo' component={Todo} />
	        <Route path='/design' component={Design} />
	        <Route component={NotFound} />
        </Switch>
    	</Router>
    );
  }
}

export default App;
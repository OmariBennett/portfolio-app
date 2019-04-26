/* @flow */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Compotnents Imports
import Header from '../components/component/Header';
import About from '../components/layout/About';
import Html from '../components/layout/Html';
import JavaScript from '../components/layout/JavaScript';
import TicTacToe from '../components/layout/TicTacToe';
import Todo from '../components/layout/Todo';
import NotFound from '../components/layout/NotFound';
import Design from '../components/layout/Design';

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
/* @flow */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Compotnents Imports
import Header from '../presentational/Header';
import About from '../presentational/About';
import Html from '../presentational/Html';
import JavaScript from '../presentational/JavaScript';
import TicTacToe from '../presentational/TicTacToe';
import Todo from '../presentational/Todo';
import NotFound from '../presentational/NotFound';
import Design from '../presentational/Design';


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
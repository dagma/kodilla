import React, { Component } from 'react';
import { Route } from 'react-router';
import { HashRouter, Link } from 'react-router-dom';
class App extends Component {
 render() {
   return (
     <HashRouter>
     	<div>
     		<Route path="/" component={Navigation}>
		  		<Route exact component={Home} />
		  		<Route path='/contact' component={Contact} />
	  		</Route>
	  	</div>
	</HashRouter>
   )
 }
}
const Home = () => <h1>Hej, tu Home component</h1>;
const Contact = () => <h1>A tu Contact component</h1>;
const Navigation = props => (
	<div>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
		{props.children}
	</div>
);

export default App;

/*
     <Router history={hashHistory}>
       <Route path='/' component={Home} />
       <Route path='/contact' component={Contact} />
     </Router>
     */
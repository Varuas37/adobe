import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Navbar from "./components/Navbar/Navbar";
function App() {
	return (
		<Router>
    <Navbar/>
			<Switch>
				<Route exact path="/" component={Homepage} />
			</Switch>
		</Router>
	);
}

export default App;

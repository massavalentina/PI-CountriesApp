import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import ActivityCreate from './Components/ActivityCreate';
import Detail from './Components/Detail';
import Navbar from './Components/Navbar';
// import About from './Components/About';

const App = () => {
	
	return (
		<main className>
			<>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={LandingPage}></Route>
						<Route path='/'>
							<Navbar />
							<Route exact path='/home' component={Home}></Route>
							<Route exact path='/detail/:id' component={Detail}></Route>
							<Route
								exact
								path='/create/activity'
								component={ActivityCreate}
							></Route>
							{/* <Route exact path='/about' component={About}></Route> */}
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</main>
	);
};

export default App;
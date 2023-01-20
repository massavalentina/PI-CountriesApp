import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import ActivityCreate from './Components/ActivityCreate/ActivityCreate';
import Detail from './Components/Detail/Detail';
import Navbar from './Components/NavBar/NavBar';
import Activities from './Components/Activities/Activities'
import HomeClimate from './ClimateComponents/HomeClimate';

const App = () => {
	
	return (
		<main className>
			<>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={LandingPage}/>
						<Route path='/'>
							<Navbar />
							<Route exact path='/home' component={Home}/>
							<Route exact path='/detail/:id' component={Detail}/>
							<Route exact path='/create/activities'component={ActivityCreate}/>
							<Route exact path='/climateapp' component={HomeClimate}/>
							<Route exact path={"/activities"} component = {Activities}/>
						</Route>
					</Switch>
				</BrowserRouter>
			</>
		</main>
	);
};

export default App;

import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio';



function App() {
  return <>
 <Router>

<Switch>
<Route path="/" component={Home} exact={true}></Route>
 <Route path="/portfolio" component={Portfolio} exact={true}></Route>
</Switch>

 </Router>
 
  </>
}

export default App;

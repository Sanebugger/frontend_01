import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Header from "./components/Header";
import Header2 from './components/Header2';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exaect path='/products' component={Products}></Route>
        <Route exact path='/contactus' component={ContactUs}></Route>
        <Route exact path='/aboutus' component={AboutUs}></Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;

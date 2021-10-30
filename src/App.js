import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Services from './Pages/Home/Services/Services';
import Destination from './Pages/Home/Destination/Destination';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            {/* <Home></Home> */}
            <Banner></Banner>
          </Route>
          <Route path="/home">
            {/* <Home></Home> */}
            <Banner></Banner>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Home'
import Products from './components/pages/Products/Home'
import SignUp from './components/pages/SignUp/Home'
import Footer from './components/pages/Footer/Footer';
function App() {
  return (
  <Router>
      <Navbar/>
      <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/SignUp" component={SignUp}/>
      </Switch>
  <Footer/>
  </Router>
    
  
  );
}

export default App;

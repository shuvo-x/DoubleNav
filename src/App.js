import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Services from './components/Services/Services';
import AboutSngle from './components/AboutSngle/AboutSngle';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (

    <Router>
     <Navbar />
        <Switch>
 
        <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/AboutSngle' component={AboutSngle} />
 
        </Switch>
      <Footer />
      </Router>
    
  );
}

export default App;

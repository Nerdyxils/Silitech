import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import Signup from './components/pages/Signup/Signup'
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={Signup}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

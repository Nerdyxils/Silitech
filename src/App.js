import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

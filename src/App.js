import {
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import Procedures from './components/Procedures'
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <div>
        <nav>
          <Link to='/'>Home</Link>{' '}
          <Link to='/procedures'>Procedures</Link>{' '}
          <Link to='/contact'>Contact</Link>
        </nav>
        
        <Route exact path='/' component={Home} />
        <Route path='/procedures' component={Procedures} />
        <Route path='/contact' component={Contact} />
    </div>

  );
}

export default App;

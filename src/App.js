import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wines from './pages/Wines';
import Grapes from './pages/Grapes';
import Producers from './pages/Producers';
import { Route, Switch } from 'react-router';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/wines'>
          <Wines />
        </Route>

        <Route path='/grapes'>
          <Grapes />
        </Route>

        <Route path='/producers'>
          <Producers />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
const ReactRouter = require('react-router-dom');
const Switch = ReactRouter.Switch;
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends React.Component{
  render(){
    return(
    <Router>
      <div className= "container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route path='/popular' component={Popular} />
          <Route render={function(){
            return <p>Not Found 404</p>
            
          }}/>
        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;

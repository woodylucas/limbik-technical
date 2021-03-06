import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/layout/NavBar';
import Index from './components/layout/Index';
import Texts from './components/text/Texts'


import { Provider } from './context';

class App extends React.Component {
  render() {

    return(
      <Provider>
        <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/text/texts/:id" component={Texts} />
             </Switch>
          </div>
        </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;

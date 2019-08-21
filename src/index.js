import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import HomeRoute from './home-route';
import OtherRoute from './other-route';
import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div className="main">
        <HashRouter>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/otherroute">Other Route</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={HomeRoute} />
              <Route path="/otherroute" component={OtherRoute} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById("app")
);

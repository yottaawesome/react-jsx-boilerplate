import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import HomeRoute from './home-route';
import OtherRoute from './other-route';
import './styles.scss';

const App = () =>
  <div className="">
    <HashRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/otherroute">Other Route</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomeRoute/>} />
        <Route path="/otherroute" element={<OtherRoute/>} />
      </Routes>
    </HashRouter>
  </div>;

render(
  <App />,
  document.getElementById("app")
);

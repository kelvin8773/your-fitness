import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/top/Header';
import Navbar from './components/bottom/Navbar';

import HomePage from './components/content/HomePage';
import AddDataPage from './components/content/AddDataPage';
import ProgressPage from './components/content/ProgressPage';
import ReportPage from './components/content/ReportPage';
import MorePage from './components/content/MorePage';

function App() {
  return (
    <div className="App">
      <div className="App-display">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/addData'>
              <AddDataPage />
            </Route>
            <Route exact path='/progress'>
              <ProgressPage />
            </Route>
            <Route exact path='/report'>
              <ReportPage />
            </Route>
            <Route exact path='/more'>
              <MorePage />
            </Route>
          </Switch>
          <Navbar />
        </Router>
      </div>
    </div>
  );
}

export default App;

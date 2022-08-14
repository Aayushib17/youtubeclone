
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Sidebar from './Sidebar';
import './App.css';
import Header from './Header';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Recommendedvideos from './Recommendedvideos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    //BEM naming class convention
    <div className="app">
      <Router>
        <Header />
      <Switch>
      <Route path="/search/:searchTerm">
      <div className="app__page">
 <Sidebar />
<SearchPage/>
  </div>
        
      </Route>
      <Route path="/">
      
      <div className="app__page">
 <Sidebar />
<Recommendedvideos/>
  </div>
  </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

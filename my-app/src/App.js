import React, { Component } from 'react';
import Home from './components/Home/Home';
import Landscape from './components/Landscape/Landscape';
import People from './components/People/People';
import Street from './components/Street/Street';
import Siluets from './components/Siluets/Siluets';
import Reportage from './components/Reportage/Reportage';
import Travel from './components/Travel/Travel';
import {Route, Switch} from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/people">
            <People />
          </Route>
          
          <Route path="/landscape">
            <Landscape />
          </Route>

          <Route path="/street">
            <Street/>
          </Route>

          <Route path="/reportage">
            <Reportage/>
          </Route>

          <Route path="/siluets">
            <Siluets/>
          </Route>

          <Route path="/travel">
            <Travel/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch> 

      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Home from './components/Home/Home';
import Section from './components/Section/Section';
import {Route, Switch} from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div>
        {/* <Switch>
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

        </Switch>  */}

        <Section/>
      </div>
    )
  }
}

export default App;

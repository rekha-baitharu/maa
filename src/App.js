import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Maa from './maa';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch grid={{xs:12}}>
        <Route exact path="/"  component={Maa}></Route>
        <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

import React from 'react';
import { Route, Switch } from 'react-router';
import {Nav,Navbar} from 'reactstrap';
import CustomNavLink from '../utils/CustomNavLink';
import CustomNavBrand from '../utils/CustomNavBrand';
import Todos from './Todos';
import TodoForm from './TodoForm';
function Header(props) {

    return (
    <div>
    <Navbar color="light" light expand="md">
        <CustomNavBrand to="/" name="Todos"></CustomNavBrand>
          <Nav className="mr-auto" navbar>
          <CustomNavLink to="/" name="Home"></CustomNavLink>
          <CustomNavLink to="/todos" name="Todos"></CustomNavLink>
          </Nav>
      </Navbar>
      <Switch>
          <Route exact path="/"></Route>
          <Route path="/todos/new"><TodoForm/></Route>
          <Route path="/todos"><Todos/></Route>
      </Switch>
      </div>

    )
}
export default Header;
import React from 'react';
import { Route, Switch } from 'react-router';
import {Nav,Navbar} from 'reactstrap';
import CustomNavLink from '../utils/CustomNavLink';
import CustomNavBrand from '../utils/CustomNavBrand';
import Todos from './Todos';
function Header(props) {

    return (
    <div>
    <Navbar color="light" light expand="md">
        <CustomNavBrand to="/" name="Todos"></CustomNavBrand>
          <Nav className="mr-auto" navbar>
          <CustomNavLink to="/" name="Home"></CustomNavLink>
          <CustomNavLink to="/list" name="List"></CustomNavLink>
          </Nav>
      </Navbar>
      <Switch>
          <Route path="/"></Route>
          <Route path="/list"><Todos/></Route>
      </Switch>
      </div>

    )
}
export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink,NavItem} from 'reactstrap';
function CustomNavLink(props) {
    return (
        <NavItem >
            <NavLink tag={Link} {...props}>{props.name}</NavLink>
        </NavItem>
    )
}

export default CustomNavLink;
import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarBrand} from 'reactstrap';
function CustomNavBrand(props) {
    return (
     <>
            <NavbarBrand tag={Link} {...props}>{props.name}</NavbarBrand>
        </>
    )
}

export default CustomNavBrand;
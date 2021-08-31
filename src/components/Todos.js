import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
function Todos(props) {
    console.log('In Todos :',Todos)
    return ( 
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <h3>All Todos</h3>
            </div>
            <div className="col-sm-6">
                <Button type="button" tag={Link} to="/todos/new">Create Task</Button>
            </div>
        </div>
    </div>
    )
}

export default Todos;
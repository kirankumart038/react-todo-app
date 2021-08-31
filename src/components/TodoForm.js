import React from 'react';
class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title : '',
            description : '',
            owner : ''
        }
    }

    handleTextChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Creating new todo with the below data : ',this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    <span>Create a New Todo</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <span>Title</span>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" value={this.state.title} onChange={this.handleTextChange} name="title"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <span>Description</span>
                    </div>
                    <div className="col-sm-8">
                        <input type="textarea" value={this.state.description} onChange={this.handleTextChange} name="description"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <span>Owner</span>
                    </div>
                    <div className="col-sm-8">
                        <input type="text" value={this.state.owner} onChange={this.handleTextChange} name="owner" ></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                            <button type="button" onClick={this.handleSubmit}>Create Task</button>
                    </div>


                </div>
            </div>
        )
    }
    
}

export default TodoForm;
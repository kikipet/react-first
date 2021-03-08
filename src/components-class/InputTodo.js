import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        // wait whoa if this doesn't exist then you can't type anything into the field
        this.setState({
            [e.target.name]: e.target.value // e.target.name will match name in input below
        });
    };

    handleSubmit = e => {
        e.preventDefault(); // **
        if (this.state.title.trim()) { // if not empty
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        }
        else {
            alert("Please write item")
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
					type="text" 
					className="input-text"
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo
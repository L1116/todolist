/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './AddDiaglog.scss';

class AddDialog extends Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    generateUid() {
        return '_' + Math.random().toString(36).substr(2,9);
    }
    handleClick() {
        var value = this.refs.myText.value;
        var uid = this.generateUid();
        if(value !== '') {
            var todo = {
                id: uid,
                name: value,
                status: 0,
            }
        }
        this.props.addTodo(todo);
        this.refs.myText.value = '';
    }
    
    render() {

        return (
            <div className="dialog">
				<div>
					<h3>Task</h3>
					<input type="text" ref="myText" placeholder="你想做点什么"/>
				</div>
				<div>
					<input type="button" value="Save Task" onClick={this.handleClick}/>
				</div>
			</div>
        );
    }
}

export default AddDialog;
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.scss';

class ListItem extends Component {
    static propTypes = {
		item: PropTypes.object,
		updateTask: PropTypes.func,
		deleteTask: PropTypes.func,
	};
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleUpdate() {
        var status = this.props.item.status;
        status = (status === 0 ? 1 : 0);
        var todoItem = {
            id: this.props.item.id,
            name: this.props.item.name,
            status: status
        }
        this.props.updateTodo(todoItem);
    }
    // handleDelete
    handleDelete() {
        console.log(this.props.item);
        this.props.deleteTodo(this.props.item);
    }
    render() {
        const {item} = this.props;
		const unfinish = {
			backgroundColor: 'rgb(192, 247, 234)',
			color: 'rgb(55, 57, 56)',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
        }
        const itemStyle = item.status ? finish : unfinish;
        return (
            <li style={itemStyle} key={item.id}>
                <span
                    onClick={this.handleUpdate}
                    id={item.id}
                    className={item.status? 'check-btn is-checked' : 'check-btn'}
                    style={{backgroundColor: '#fff'}}
                ></span>
                <span>{item.name}</span>
                <span 
                    onClick={this.handleDelete} 
                    className="delete-btn"
                >
                    删除
                </span>
            </li>
        );
    }
}

export default ListItem;
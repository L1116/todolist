/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import AddDialog from '../components/AddDialog';
import './TodoList.scss';
class TodoList extends Component {
	constructor (props) {
        super(props);
        
    }
    getFinished() {
        let sum = 0;
        this.props.todoList.forEach( (ele,idx) =>{
            if(ele.status) {
                sum++;
            }
        })
        console.log('todoList',this.props.todoList);
        console.log('sum',sum);
        return sum;
    } 
	render () {
        const { todoList, finished } = this.props;
		return (
            <div className='container'>
                <ul>
                    {
                        todoList && todoList.map((item,idx) => {
                            return  (<ListItem 
                                        key={idx}
                                        item={item}
                                        updateTodo={this.props.updateTodo}
                                        deleteTodo={this.props.deleteTodo}
                                    />)
                        })
                    }
                    <li>{finished}已完成&nbsp;/&nbsp;{todoList.length}总数</li>
                </ul>
                <AddDialog addTodo={this.props.addTodo} />
            </div>
		);
	}
}

export default TodoList;
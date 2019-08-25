import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './comtainer/TodoList';
import {iniTodoList, addTodo, updateTodo,deleteTodo} from './reducers/todos'

class App extends Component {
  componentDidMount(){
    iniTodoList()
  }
  render(){
    return (
      <div className="App">
          <div className='tittle'>react-redux TodoList</div>
          <TodoList {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 提供给 CommentListContainer
    // 当从 LocalStorage 加载评论列表以后就会通过这个方法
    // 把评论列表初始化到 state 当中
    iniTodoList: (todoList) => {
      dispatch(iniTodoList(todoList))
    },
    addTodo: (todoItem) => {
      dispatch(addTodo(todoItem))
    },
    updateTodo: (todoItem) => {
      dispatch(updateTodo(todoItem));
    },
    // 删除
    deleteTodo:(todoItem) => {
      dispatch(deleteTodo(todoItem));
    }
    
  }
}

// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



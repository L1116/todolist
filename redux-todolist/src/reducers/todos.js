// action types

// 初始化评论
const INIT_TODOLIST = 'INIT_TODOLIST'
const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_TODOLIST:
            // 初始化评论
            // console.log('state',state)
            return { todoList: state.todoList }
        case ADD_TODO:
            var listArr = state.todoList.slice();
            listArr.push(action.payload);
            return {
                ...state,
                todoList: listArr,
            }
        case UPDATE_TODO:
            // console.log(action)
           
            let sum = 0;
            state.todoList.forEach((ele, idx) => {
                if (ele.id === action.payload.id) {
                    ele.status = action.payload.status
                }
                if (ele.status === 1) {
                    sum++;
                }
            })
            // console.log('state',state)
            return {
                ...state,
                todoList: [...state.todoList],
                finished: sum
            }
        case DELETE_TODO:
            
            let afdSum = 0;
            const index = state.todoList.indexOf(
                state.todoList.find(todo => todo.id === action.payload.id)
            )
            var newarr = state.todoList.slice();
            newarr.splice(index,1);
            console.log('state',state)
            newarr.forEach( (ele) => {
                if (ele.status === 1) {
                    afdSum++;
                }
        
            })
            console.log('adSum',afdSum)
            console.log('state',state,state.finished);
            return {
                ...state,
                todoList: newarr,
                finished: afdSum
            }
        default: {
            return state;
        }
    }
}

export default todosReducer;

// action creaters
export const iniTodoList = (todoList) => {
    return {
        type: INIT_TODOLIST,
        payload: todoList
    }
}

export const addTodo = (todoItem) => {
    return {
        type: ADD_TODO,
        payload: todoItem
    }
}
export const updateTodo = (todoItem) => {
    console.log('action', todoItem)
    return {
        type: UPDATE_TODO,
        payload: todoItem
    }
}
export const deleteTodo = (todoItem) => {
    console.log('action',todoItem);
    return {
        type: DELETE_TODO,
        payload: todoItem
    }
}
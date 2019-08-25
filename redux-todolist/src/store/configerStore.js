import {createStore} from 'redux';
import todosReducer from '../reducers/todos'
const initislState = {
    todoList: [{
        id: 0,
        name: '吃饭',
        status: 0
    }, {
        id: 1,
        name: '打豆豆',
        status: 0

    }, {
        id: 2,
        name: '回家',
        status: 0
    }, {
        id: 3,
        name: '睡觉',
        status: 0
    }],
    finished: 0
};

let store = createStore(
    todosReducer,
    initislState
)

export default store;
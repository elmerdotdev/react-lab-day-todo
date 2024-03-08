import Welcome from '../Welcome/Welcome'
import TodoList from '../TodoList/TodoList'
import TodoAdd from '../TodoAdd/TodoAdd'
import './Todo.css'

const Todo = () => {
  return (
    <div className="todo__wrapper">
      <Welcome />
      <TodoList />
      <TodoAdd />
    </div>
  )
}

export default Todo
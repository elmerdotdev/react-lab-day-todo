import './TodoAdd.css'

const TodoAdd = () => {
  return (
    <div className="todo__add">
      <form>
        <input type="text" placeholder="Enter a new task..." required />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default TodoAdd
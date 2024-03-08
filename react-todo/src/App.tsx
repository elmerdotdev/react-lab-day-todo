import { useState } from 'react'
import './App.css'

import Login from './components/Login/Login'
import Todo from './components/Todo/Todo'

const App = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  return (
    <div className="todo">
      {!loggedIn ? (
        <Login />
      ) : (
        <Todo />
      )}
    </div>
  )
}

export default App
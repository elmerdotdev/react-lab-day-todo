import './Login.css'

const Login = () => {
  return (
    <div className="todo__login">
      <form>
          <h2>Hi. What&apos;s your name?</h2>
          <div className="todo__login_input">
            <input type="text" name="fullname" required autoComplete='off' />
            <button type="submit">Login</button>
          </div>
      </form>
    </div>
  )
}

export default Login
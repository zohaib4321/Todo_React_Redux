
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from "./components/Todos"

function App() {

  return (
    <div>
    <h1 
    className='text-2xl text-center mt-12 text-white/80'
    >Manage Todos</h1>
    <AddTodo />
    <Todos />
    </div>
  )
}

export default App

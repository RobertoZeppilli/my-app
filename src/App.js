import './App.css';
import Header from '../src/components/Header'
import Tasks from '../src/components/Tasks'
import AddTask from './components/AddTask';
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  let [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Pulire il garage',
      data: '18/10/2021',
      reminder: false
    },
    {
      id: 2,
      task: 'Fare la spesa',
      data: '18/10/2021',
      reminder: true
    },
    {
      id: 3,
      task: 'Lavare il cane',
      data: '18/10/2021',
      reminder: false
    },
  ])
  const deleteTask = (id) => {
    setTasks(
      tasks.filter( task => task.id !== id)
    ) 
  }

  const updateReminder = (id) => {
    setTasks(
      tasks.map( task => task.id === id ? {...task, reminder: !task.reminder } : task)
    )
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setTasks([...tasks, {id, ...task}])
  }



  
  
  return (
    <div className="App">
      <Header onAdd={() => setShow(!show)} title="Task Manager" />
      {show && <AddTask onAdd={addTask}/>}
      <div className="container">
        {tasks.length > 0 ? (<Tasks onUpdate={updateReminder} tasks={tasks} onDelete={deleteTask} />) : `No tasks to show!`}
      </div>
    </div>
  );
}

export default App;

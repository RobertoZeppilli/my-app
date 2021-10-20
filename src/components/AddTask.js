import { useState } from 'react'
import Button from '../components/Button'

const AddTask = ({ onAdd }) => {
  const [task, setText] = useState('')
  const [data, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!task || !data) {
      alert('Please add a task')
      return
    }

    onAdd({ task, data, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form container' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={task}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day and Time</label>
        <input
          type='text'
          placeholder='Add Day and Time'
          value={data}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <Button text="Save" color="black" type="submit" width="100%"/>
      
    </form>
  )
}

export default AddTask

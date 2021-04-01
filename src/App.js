import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  const deleteTask = (id) => {
    console.log('Deleting Task ', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    
    console.log('Toggle Reminder' , id);
    setTasks(tasks.map((task) => 
      task.id === id ?
        {...task, reminder: !task.reminder } :task))
  }

  return (
    <div className='container'>
      <Header title="Task Tracker from app.js"></Header>
      
      { tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks available' 
      }
    </div>
  );
}

export default App;

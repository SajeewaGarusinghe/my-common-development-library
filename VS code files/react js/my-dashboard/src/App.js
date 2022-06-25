import Header from './component/Header';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'doctors appointment', day: '2022/02/01', reminder: true },
    { id: 2, text: 'Meeting at school', day: '2022/03/08', reminder: true },
    { id: 3, text: 'Food shopping', day: '2022/08/09', reminder: false },
  ]);
//state variable for ADD button in the header
  const [showAddTask, setAddTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete Task
  const deleteTask = (id) => {
    // console.log('deleted', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const togglereminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togglereminder} />
      ) : (
        'no task to show'
      )}
    </div>
  );
}

export default App;

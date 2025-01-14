import { useState } from 'react';
import TodoDialog from './components/TodoDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      canceled: false,
      completed: true,
      createtime: '2025-01-01T00:00:00',
    },
    {
      id: 2,
      text: 'Learn Vue',
      canceled: false,
      completed: true,
      createtime: '2025-01-01T00:00:01',
    },
    {
      id: 3,
      text: 'Learn Angular',
      canceled: false,
      completed: false,
      createtime: '2025-01-01T00:00:02',
    },
    {
      id: 4,
      text: 'Learn Svelte',
      canceled: false,
      completed: false,
      createtime: '2025-01-01T00:00:03',
    },
    {
      id: 5,
      text: 'Learn Next',
      canceled: false,
      completed: false,
      createtime: '2025-01-01T00:00:04',
    },
    {
      id: 6,
      text: 'Learn Nuxt',
      canceled: false,
      completed: true,
      createtime: '2025-01-01T00:00:05',
    },
  ]);

  return (
    <div className='layout bg-[#555] h-screen xl:p5'>
      <div className='flex-center h-screen fixed inset-0'>
        <button
          className='OpenBtn flex-center border w50 mxa py2 rounded-md bg-white'
          onClick={() => setIsOpen(true)}
        >
          Open Todo List Dialog
        </button>
      </div>

      {isOpen && (
        <TodoDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          todos={todos}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

export default App;

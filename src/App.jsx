import { useState } from 'react';
import TodoDialog from './components/TodoDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);

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

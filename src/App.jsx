import { useState } from 'react';
import TodoDialog from './components/TodoDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Open Todo List Dialog');

  const handleClick = async () => {
    setButtonText('Loading...');
    try {
      await fetchTodoData();
      setIsOpen(true);
      setButtonText('Open Todo List Dialog');
    } catch (_) {
      setButtonText('error: check localhost server !');
      setTimeout(() => {
        setButtonText('Open Todo List Dialog');
      }, 3000);
    }
  };

  const fetchTodoData = async () => {
    const response = await fetch('http://localhost:3000/todos');
    if (!response.ok) {
      throw new Error('error: check localhost server !');
    }
    return await response.json();
  };

  return (
    <div className='layout bg-[#555] h-screen xl:p5'>
      <div className='flex-center h-screen fixed inset-0'>
        <button
          className='OpenBtn flex-center border w70 mxa py2 rounded-md bg-white'
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>

      {isOpen && <TodoDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;

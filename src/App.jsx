import { useState } from 'react';
import TodoDialog from './components/TodoDialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Open Todo List Dialog');

  const handleClick = () => {
    setButtonText('Loading...');
    try {
      setIsOpen(true);
    } catch (_) {
      setButtonText('error: Please check localhost server');
      setTimeout(() => {
        setButtonText('Open Todo List Dialog');
      }, 3000);
      return;
    }
    setButtonText('Open Todo List Dialog');
  };

  return (
    <div className='layout bg-[#555] h-screen xl:p5'>
      <div className='flex-center h-screen fixed inset-0'>
        <button
          className='OpenBtn flex-center border w50 mxa py2 rounded-md bg-white'
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

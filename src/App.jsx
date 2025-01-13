import { useState } from 'react';
import CustomCheckbox from './components/CustomCheckbox';
import CancelSvg from './components/CancelSvg';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [barRange, setBarRange] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Learn Vue', completed: true },
    { id: 3, text: 'Learn Angular', completed: false },
    { id: 4, text: 'Learn Svelte', completed: false },
    { id: 5, text: 'Learn Next', completed: false },
    { id: 6, text: 'Learn Nuxt', completed: true },
  ]);

  return (
    <div className='layout bg-[#555] h-screen xl:p5'>
      <div className='flex-center  h-screen fixed inset-0'>
        <button
          className='OpenBtn flex-center border w50 mxa py2 rounded-md bg-white'
          onClick={() => setIsOpen(true)}
        >
          Open Todo List Dialog
        </button>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 flex items-center justify-center
          animate-fade-in animate-duration-150'
        >
          <div
            className='todolist-dialog relative select-none wfull max-w-520px max-h-692px hfull 
            bg-gradient-to-b from-purple-100 to-purple-200 pt15 px8 flex flex-col gap-y-4
            '
          >
            <div
              onClick={() => setIsOpen(false)}
              className='dialog-close absolute top-5 right-5 cursor-pointer'
            >
              <CancelSvg size='w10 h10' />
            </div>
            <header className='space-y-1'>
              <h1 className='text-2xl c-blue-400 fw600'>Todo List</h1>
              <h2 className='text-xs c-gray-400'>Add things to do</h2>
            </header>
            <div className='splitLine h3px bg-gray-200 wfull rounded-full '></div>
            <div className='barRange flex-center'>
              <p className='c-blue-400 inline-block pr2 '>{barRange}%</p>
              <div className='bar bg-white h4 flex-1 rounded-full'>
                <div
                  style={{ width: `${barRange}%` }}
                  className='barInner bg-gradient-to-r from-blue-100 to-blue-200 hfull rounded-full transition-all duration-300 ease-in-out'
                ></div>
              </div>
            </div>
            <div className='listBox grid gap-y-2 w[calc(100%+64px)] relative -left-8 px8 hfull max-h-62 py2 overflow-y-auto'>
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className='item flex items-center h13 bg-white rounded-md relative px4 flex justify-between'
                >
                  <div className='absolute left-0 hfull w1 rounded-l-md bg-blue-300'></div>
                  <div className='flex items-center gap-x-4'>
                    <CustomCheckbox
                      checked={todo.completed}
                      onChange={() => {
                        setTodos(
                          todos.map((t) =>
                            t.id === todo.id
                              ? { ...t, completed: !t.completed }
                              : t
                          )
                        );
                      }}
                    />
                    <p
                      className={`c-blue-300 ${
                        todo.completed ? 'line-through' : ''
                      }`}
                    >
                      {todo.text}
                    </p>
                  </div>
                  <CancelSvg />
                </div>
              ))}
            </div>
            <div className='splitLine h3px bg-gray-200 wfull rounded-full '></div>
            <div className='toggle flex justify-end items-center '>
              <span className='c-blue-300 text-sm mr2 mt1'>
                Move done things to end?
              </span>
              <button
                className={`toggleBtn w10 h5 rounded-full relative transition-colors duration-300 ${
                  isChecked ? 'bg-purple-300' : 'bg-white'
                }`}
                onClick={() => setIsChecked(!isChecked)}
              >
                <div
                  className={`toggleBtnInner  rounded-full w4 h4 absolute top-0.5 transition-all duration-300 ${
                    isChecked ? 'ml5 bg-white' : 'ml1 bg-purple-300'
                  }`}
                ></div>
              </button>
            </div>
            <div className='addBox absolute bottom-8 left-0 wfull px8'>
              <label className='block c-gray-400 ml1 mb1 fw600'>
                Add to list
              </label>
              <div className='flex-center gap-x-2  h13 '>
                <input
                  className='wfull  hfull  rounded-md pl3 focus:outline-none'
                  type='text'
                />
                <button className='w20 hfull bg-blue-300  rounded-md'>
                  <div className='text-4xl c-white  wfull hfull text-center pt1'>
                    +
                  </div>
                </button>
              </div>
              {/* <button>Add</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

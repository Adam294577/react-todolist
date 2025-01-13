import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const Add = () => {
    setCount(count + 1);
  };

  return (
    <div className=''>
      <p>{count}</p>
      <button onClick={Add}>++</button>
    </div>
  );
}

export default App;

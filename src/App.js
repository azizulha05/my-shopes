import { useState } from 'react';
import './App.css';
import AllGun from './components/AllGuns/AllGun';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  const countIncreases = () => { setCount(count + 1) };

  return (
    <div>
      <Navbar count={count} />
      <AllGun countIncreases={countIncreases} />
    </div>
  );
}

export default App;

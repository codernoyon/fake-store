import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AllProcduct from './components/AllProduct/AllProcduct';
import { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);
  
  const updateCart = () => {
    setCount(count+ 1)
  };

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="App">
      <Header count={count}></Header>
      <AllProcduct updateCart={updateCart}></AllProcduct>
    </div>
  );
}

export default App;

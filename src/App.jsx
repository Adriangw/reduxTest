
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, porDos } from './store/slices/counter';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  
  const { counter } = useSelector((state)=>state.counter)//para seleccionar algo del store
  const dispatch = useDispatch();

  return (
    <div className="App">

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React {counter}</h1>

      <div className="card">

        <button onClick={() => dispatch(increment())}>
          +
        </button>

        <button onClick={() => dispatch(decrement())}>
          -
        </button>

        <button onClick={() => dispatch(porDos(2))}> {/*con payload*/}
          x2
        </button>

      </div>
    </div>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
import Work from './Components/Works/Work';

function App() {
  return (
    <div className="App">
    <Header title="Hola 🔥"/>
    <Counter />
    <Work />
    {/* Cambia estado*/}
    </div>
  )
};
//{"Hola 🔥"}
export default App;

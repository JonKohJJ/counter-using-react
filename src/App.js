import './App.css';
import Navbar from './components/navbar';
import Counter from './components/counter';


function App() {

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Counter />
      </div>
    </div>
  );
}

export default App;

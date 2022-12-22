import './App.css';
import Navbar from './navbar';
import Home from './components/home';
import Counter from './components/counter';
import Projects from './components/projects';
import Donate from './components/donate';


function App() {


  let component;
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/counter":
      component = <Counter />
      break
    case "/projects":
      component = <Projects />
      break
    case "/donate":
      component = <Donate />
      break
  }

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="contentContainer">
          {component}
        </div>
      </div>
    </div>
  );
}

export default App;

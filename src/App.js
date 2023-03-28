import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Addmovie from './components/Addmovie';

function App() {
  return (
    <div className="App">
     <Movie/>
     <Addmovie/>
    </div>
  );
}

export default App;

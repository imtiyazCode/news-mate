import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </Router>
    </div>
  );
}

export default App;

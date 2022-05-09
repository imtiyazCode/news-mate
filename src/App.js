import './App.css';
import Header from './components/Header';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<News category={"general"}/>} />
            <Route path="/business" element={<News category={"business"}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

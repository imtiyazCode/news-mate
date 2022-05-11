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
            <Route path="/" element={<News category={"general"} country={"in"} pageSize={30} />} />
            <Route path="/business" element={<News category={"business"} country={"in"} pageSize={30} />} />
            <Route path="/entertainment" element={<News category={"entertainment"} country={"in"} pageSize={30} />} />
            <Route path="/health" element={<News category={"health"} country={"in"} pageSize={30} />} />
            <Route path="/science" element={<News category={"science"} country={"in"} pageSize={30} />} />
            <Route path="/sports" element={<News category={"sports"} country={"in"} pageSize={30} />} />
            <Route path="/technology" element={<News category={"technology"} country={"in"} pageSize={30} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

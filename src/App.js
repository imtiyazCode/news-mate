import Header from './components/Header';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API
  
  
  return (
    <div className="App">
      <Router>
        <Header />
        <LoadingBar
            color='#f11946'
            progress={progress}
          />
        <div className='main py-20'>
          <Routes>
            <Route path="/" element={<News category={"general"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
            <Route path="/business" element={<News category={"business"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
            <Route path="/entertainment" element={<News category={"entertainment"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
            <Route path="/health" element={<News category={"health"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
            <Route path="/science" element={<News category={"science"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
            <Route path="/sports" element={<News category={"sports"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
            <Route path="/technology" element={<News category={"technology"} country={"in"} pageSize={30} setProgress={setProgress} apiKey={apiKey} />}  />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

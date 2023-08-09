import './App.css';
import Create from './component/create';
import Read from './component/read';
import Update from './component/update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
        <div className="main">
          <Routes>
            <Route path='/create' element={<Create/>} />
            <Route path='/read' element={<Read/>} />
            <Route path='/update' element={<Update/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;

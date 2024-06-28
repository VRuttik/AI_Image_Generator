import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGenerator from './components/ImageGenerator/ImageGenerator';

App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ImageGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
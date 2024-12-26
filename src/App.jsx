import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App

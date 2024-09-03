import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CorporateIdentity from './pages/NewsPage';

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news/:id' element={<CorporateIdentity />} />
    </Routes>
  )
}

export default App;
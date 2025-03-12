import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TheoryList from './components/TheoryList'
import TheoryForm from './components/TheoryForm'



function App() {
  return (
   <Router>
    <nav>
      <Link to='/'>Theories</Link>
      <Link to='/add'>Add Theory</Link>
    </nav>
      <Routes path='/' element={TheoryList} />
      <Routes path='/add' element={TheoryForm} />
   </Router>
  );
}

export default App;

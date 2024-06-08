
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddTodo/>}/>
      <Route path='/Search' element={<SearchTodo/>}/>
      <Route path='/Delete' element={<DeleteTodo/>}/>
      <Route path='/View' element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;

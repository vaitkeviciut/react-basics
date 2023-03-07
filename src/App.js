import { Route, Routes, Link } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import NewsPage from './components/NewsPage/NewsPage';
import Contacts from './components/Contacts/Contacts';
import Counter from './components/CounterPage/Counter';
import CarsPage from './components/CarsPage/CarsPage';
import DarkModePage from './components/DarkModePage/DarkModePage';
import ShoppingListPage from './components/ShoppingListPage/ShoppingListPage';
import ToDoListPage from './components/ToDoListPage/ToDoListPage';
import StudentFormPage from './components/StudentFormPage/StudentFormPage';
import ApiActivitiesPage from './components/ApiActivitiesPage/ApiActivitiesPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={
        <ul>
          <li>
            <Link to='/codeacademy'>CodeAcademy - Project</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts - Project</Link>
          </li>
          <li>
            <Link to='/counter'>Grader</Link>
          </li>
          <li>
            <Link to='/cars'>Cars Form</Link>
          </li>
          <li>
            <Link to='/darkmode'>Dark/Light Mode</Link>
          </li>
          <li>
            <Link to='/shoppinglistpage'>Shopping List</Link>
          </li>
          <li>
            <Link to='/todolist'>To Do List</Link>
          </li>
          <li>
            <Link to='/studentform'>Student Form Page</Link>
          </li>
          <li>
            <Link to='/apiactivities'>API Activities Page</Link>
          </li>
        </ul>
      } />
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/darkmode' element={<DarkModePage />} />
        <Route path='/shoppinglistpage' element={<ShoppingListPage />} />
        <Route path='/todolist' element={<ToDoListPage />} />
        <Route path='/studentform' element={<StudentFormPage />} />
        <Route path='/apiactivities' element={<ApiActivitiesPage />} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/'>Back to Home page</Link>
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;

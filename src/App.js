import { Route, Routes, Link } from 'react-router-dom';

import ContentNav from './components/ContentNav';
import MainPage from './components/MainPage/MainPage';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import NewsPage from './components/NewsPage/NewsPage';
import Contacts from './components/Contacts/Contacts';
import Counter from './components/CounterPage/Counter';
import CarsPage from './components/CarsPage/CarsPage';
import ShoppingListPage from './components/ShoppingListPage/ShoppingListPage';
import ToDoListPage from './components/ToDoListPage/ToDoListPage';
import StudentFormPage from './components/StudentFormPage/StudentFormPage';
import ApiActivitiesPage from './components/ApiActivitiesPage/ApiActivitiesPage';
import ApiRandomUserPage from './components/ApiRandomUserPage/ApiRandomUserPage';
import ApiChuckPage from './components/ApiChuckPage/ApiChuckPage';
import ApiDogsPage from './components/ApiDogsPage/ApiDogsPage';
import ApiPage from './components/ApiPage/ApiPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ContentNav/>} />
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/shoppinglistpage' element={<ShoppingListPage />} />
        <Route path='/todolist' element={<ToDoListPage />} />
        <Route path='/studentform' element={<StudentFormPage />} />
        <Route path='/apiactivities' element={<ApiActivitiesPage />} />
        <Route path='/apirandomuser' element={<ApiRandomUserPage />} />
        <Route path='/apichuck' element={<ApiChuckPage />} />
        <Route path='/apidogs/:breed' element={<ApiDogsPage />} />
        <Route path='/apidogs' element={<ApiDogsPage />} />
        <Route path='/apipage' element={<ApiPage />} />
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

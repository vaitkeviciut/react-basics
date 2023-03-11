import { Route, Routes, Link } from 'react-router-dom';

import ContentNav from './components/ContentNav';
import MainPage from './components/CodeAcademyPage/CaMainPage/MainPage/MainPage';
import ProgramsPage from './components/CodeAcademyPage/CaProgramsPage/ProgramsPage/ProgramsPage';
import NewsPage from './components/CodeAcademyPage/CaNewsPage/NewsPage/NewsPage';
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
        <Route path='/react-basics' element={<ContentNav/>} />
        <Route path='/react-basics/codeacademy' element={<MainPage />} />
        <Route path='/react-basics/codeacademy/news' element={<NewsPage />} />
        <Route path='/react-basics/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/react-basics/contacts' element={<Contacts />} />
        <Route path='/react-basics/counter' element={<Counter />} />
        <Route path='/react-basics/cars' element={<CarsPage />} />
        <Route path='/react-basics/shoppinglistpage' element={<ShoppingListPage />} />
        <Route path='/react-basics/todolist' element={<ToDoListPage />} />
        <Route path='/react-basics/studentform' element={<StudentFormPage />} />
        <Route path='/react-basics/apiactivities' element={<ApiActivitiesPage />} />
        <Route path='/react-basics/apirandomuser' element={<ApiRandomUserPage />} />
        <Route path='/react-basics/apichuck' element={<ApiChuckPage />} />
        <Route path='/react-basics/apidogs/:breed' element={<ApiDogsPage />} />
        <Route path='/react-basics/apidogs' element={<ApiDogsPage />} />
        <Route path='/react-basics/apipage' element={<ApiPage />} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/react-basics'>Back to Home page</Link>
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;

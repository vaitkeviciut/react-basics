import { Route, Routes, Link } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import NewsPage from './components/NewsPage/NewsPage';
import Contacts from './components/Contacts/Contacts';
import Counter from './components/CounterPage/Counter';
import Cars from './components/CarsPage/Cars';

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
            <Link to='/counter'>Counter Page</Link>
          </li>
          <li>
            <Link to='/cars'>Cars Page</Link>
          </li>
        </ul>
      } />
        <Route path='/codeacademy' element={<MainPage />} />
        <Route path='/codeacademy/news' element={<NewsPage />} />
        <Route path='/codeacademy/programs' element={<ProgramsPage />} />
        <Route path='/contacts/' element={<Contacts />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/cars' element={<Cars />} />
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
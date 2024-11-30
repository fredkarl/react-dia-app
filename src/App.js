import { BrowserRouter, Route, Routes } from 'react-router';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/Feed';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}
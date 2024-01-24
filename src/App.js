import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Spinner from './component/Spinner/Spinner';
import AdminLayout from './layout/AdminLayout';
import Layout from './layout/Layout';
import SecureGate from './layout/SecureGate';
import AdminUserPage from './pages/AdminUserPage/AdminUserPage';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  // return <HookPage/>
  return (
    <>
      <Spinner />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="detail/:maPhim" element={<DetailPage />} />
          </Route>

          <Route path='admin' element={<SecureGate><AdminLayout /></SecureGate>}>
            <Route path='users' element={<AdminUserPage />} />
          </Route>

          <Route path="login" element={<LoginPage />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;

import Login from './Login';
import Home from './components/Home';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import Admin from './components/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path='login' element={<Login />} />
        <Route path='link' element={<LinkPage />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
/*
<Route path='unauthorized' element={<Unauthorized />}/>


//<Route path="admin" element={<Admin />} />

//{/* Catch all */
//<Route path="*" element={<Missing />} />

import Login from './Login';
import Home from './components/Home';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Admin from './components/Admin';
import Cashier from './components/Cashier';
import AdminClients from './components/AdminClients';
import AdminInvoices from './components/AdminInvoices';
import AdminUsers from './components/AdminUsers';
import AdminMenuItems from './components/AdminMenuItems';
import Unauthorized from './components/Unauthorized';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NewUser from './components/NewUser';
import NewClient from './components/NewClient';
import NewMenuItem from './components/NewMenuItem';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path='login' element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[1000]}/>}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[9999]}/>}>
          <Route path="/admin" element={<Admin />} />
          <Route path='/adminClients' element={<AdminClients />}/>
          <Route path='/modifyClient' />
          <Route path='/deleteClient' />
          <Route path='/newClient' element={<NewClient />}/>
          <Route path='/adminUsers' element={<AdminUsers />}/>
          <Route path='/modifyUser' />
          <Route path='/deleteUser' />
          <Route path='/newUser' element={<NewUser />}/>
          <Route path='/adminInvoices' element={<AdminInvoices />}/>
          <Route path='/modifyInvoice' />
          <Route path='/deleteInvoice' />
          <Route path='/adminMenuItems' element={<AdminMenuItems />}/>
          <Route path='/modifyMenuItem' />
          <Route path='/deleteMenuItem' />
          <Route path='/newMenuItem' element={<NewMenuItem />}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={[1984, 9999]} />} >
          <Route path="/newInvoice" element={<Cashier />} />
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

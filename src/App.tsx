
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import Layout from './shared/components/layout/layout';
import Dashboard from './user/pages/dashboard';
import Users from './user/pages/users';
import User from './user/pages/user';
import AddUser from './user/pages/addUser';
import EditUser from './user/pages/editUser';

const App: React.FC =() => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/users" element={<Users />}>
              <Route path=":userId" element={<User />} />
              <Route path="new" element={<AddUser />} />
              <Route path="edit" element={<EditUser />} />
            </Route>
          </Route>
        </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;

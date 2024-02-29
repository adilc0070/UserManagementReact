import React from 'react';
import Heading from '../components/Heading';
import AdminDashBoard from '../components/AdminDashBoard';
import AddUser from '../components/AddUser';

function AdminPage() {
  return (
    <>
      <Heading />
      <AdminDashBoard />
      <AddUser/>
    </>
  );
}

export default AdminPage;

import { setIsTokenThere } from '@/config/redux/reducer/authReducer';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminDashboardLayout from '../../layout/dashboardLayout/adminDashboardLayout';
import { fetchUser } from '@/config/redux/action/authAction';

const Admin = () => {

    const authState = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

  return (
    <AdminDashboardLayout>
      <div>
      Admin Dashboard
    </div>
    </AdminDashboardLayout>
  )
}

export default Admin

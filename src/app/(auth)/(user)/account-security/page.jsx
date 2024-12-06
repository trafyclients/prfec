'use client'
import React, { useEffect } from 'react';
import '@styles/auth/user/UserSettings.css';
import UserDashboard from '@components/auth/user/UserDashboard';
import UserAccountSecurity from '@components/auth/user/UserAccountSecurity';
import { useRouter } from "next/navigation";
import { UserAuth } from "@context/AuthContext";

const Page = () => {
  const router = useRouter();
  const { user, loading } = UserAuth();

  useEffect(() => {

      if (!user) {
        router.push('/login');
      }
  }, [user, router]);

 
  return (
    <div className='user-settings'>
      <div className='user-settings-container'>
        <div className='user-settings-dashboard'>
          <UserDashboard profile="inherit" security="#e7e7e7" />
          <UserAccountSecurity />
        </div>
      </div>
    </div>
  );
};

export default Page;

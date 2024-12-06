'use client'
import React, {useEffect} from 'react'
import '@styles/auth/user/UserSettings.css'
import UserDashboard from '@components/auth/user/UserDashboard'
import UserAccountSetting from '@components/auth/user/UserAccountSetting'
// import UserProgress from '@components/auth/user/UserProgress'
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
                <UserDashboard profile="#e7e7e7" security="inherit"/>
                <UserAccountSetting/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Page
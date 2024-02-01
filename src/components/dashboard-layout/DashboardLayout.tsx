import { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
// import ProfileSection from './profile/ProfileSection';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid min-h-screen' style={{ gridTemplateColumns: '1fr 6fr' }}>
      <Sidebar />
      {/* <ProfileSection /> */}
      <main className='py-12 px-8'>{children}</main>
    </div>
  );
};

export default DashboardLayout;

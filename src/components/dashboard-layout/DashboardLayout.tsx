import { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';
import ProfileSection from './profile/ProfileSection';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid min-h-screen' style={{ gridTemplateColumns: '1fr 6fr' }}>
      <Sidebar />
      <ProfileSection />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;

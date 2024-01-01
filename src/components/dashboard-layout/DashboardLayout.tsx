import { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid min-h-screen' style={{ gridTemplateColumns: '1fr 6fr' }}>
      <Sidebar />
      {/* <ProfileSection /> */}
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;

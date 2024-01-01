import DashboardLayout from '#/components/dashboard-layout/DashboardLayout';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;

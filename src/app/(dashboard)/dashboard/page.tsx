import Heading from '@/components/dashboard-layout/ui/Heading';
import type { Metadata } from 'next';
import TasksView from './TasksView';
// import { NO_INDEX_PAGE } from '@constants/seo.constants';

export const metadata: Metadata = {
  title: 'Dashboard',
  // ...NO_INDEX_PAGE,
};
const DashboardPage = () => {
  return (
    <div className=''>
      <Heading title='Tasks' />
      <TasksView />
    </div>
  );
};

export default DashboardPage;

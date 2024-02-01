import { COLORS } from '@/constants/colors.constants';
import { GanttChartSquare } from 'lucide-react';
import MenuItem from './MenuItem';
import { MENU } from './menu.data';
const Sidebar = () => {
  return (
    <aside className=' border-r border-r-border h-full bg-slate-800'>
      <div className='flex items-center justify-center gap-2.5 p-layout border-b border-b-border'>
        <GanttChartSquare color={COLORS.primary} size={30} />
        <span className='text-2xl font-bold text-primary'>ICON</span>
      </div>
      <ul>
        <li className='p-3'>
          {MENU.map(item => (
            <MenuItem item={item} key={item.link} />
          ))}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

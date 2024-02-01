import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { IMenuInterface } from './menu.interface';

export const MENU: IMenuInterface[] = [
  {
    icon: 'layout-dashboard',
    link: DASHBOARD_PAGES.HOME,
    name: 'Dashboard',
  },
  {
    icon: 'kanban-square',
    link: DASHBOARD_PAGES.TASKS,
    name: 'Tasks',
  },
  {
    icon: 'timer',
    link: DASHBOARD_PAGES.TIMER,
    name: 'Timer',
  },
  {
    icon: 'circle-dashed',
    link: DASHBOARD_PAGES.HABITS,
    name: 'Habits',
  },
  {
    icon: 'calendar-range',
    link: DASHBOARD_PAGES.TIME_MANAGEMENT,
    name: 'Management',
  },
  {
    icon: 'settings',
    link: DASHBOARD_PAGES.SETTINGS,
    name: 'Settings',
  },
];

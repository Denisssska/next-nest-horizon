import Link from 'next/link';
import { FC } from 'react';
import Icon from '../ui/Icon';
import { IMenuInterface } from './menu.interface';

interface IMenuItem {
  item: IMenuInterface;
}
const MenuItem: FC<IMenuItem> = ({ item }) => {
  return (
    <div>
      <Link
        href={item.link}
        className='flex  gap-2.5 items-center py-1.5 mb-1.5 px-layout transition-colors hover:bg-border rounded-lg'
      >
        <Icon name={item.icon} />
        <span>{item.name}</span>
      </Link>
    </div>
  );
};

export default MenuItem;

import { Checkbox } from '@/components/ui/checkbox';
import { GripVertical } from 'lucide-react';
import styles from './list-view.module.scss';
const ListView = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Task name</th>
          <th>Due date</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='flex border-none'>
            <GripVertical className={styles.grip} />
            <label htmlFor='check' className='flex items-center gap-1'>
              <Checkbox defaultChecked id='check' className=' ' /> Finish user onboarding
            </label>
          </td>
          <td>01 feb 2024</td>
          <td>Hight</td>
        </tr>
        <tr className='colHeading'>
          <td colSpan={3}>TO DO</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListView;

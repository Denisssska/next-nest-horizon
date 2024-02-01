import { Kanban, ListTodo } from 'lucide-react';

import { Dispatch, SetStateAction } from 'react';
import { TypeView } from './TasksView';
interface ISwitcherView {
  type: TypeView;
  setType: Dispatch<SetStateAction<TypeView>>;
}
const SwitcherView = ({ type, setType }: ISwitcherView) => {
  return (
    <div className='flex items-center justify-center gap-4 py-6'>
      <button
        onClick={() => setType('list')}
        className={`${type === 'list' ? 'border-b-primary' : 'border-b-transparent opacity-40'} border-b  flex items-center gap-2`}
      >
        <ListTodo />
        List
      </button>
      <button
        className={`${type === 'kanban' ? 'border-b-primary' : 'border-b-transparent opacity-40'} border-b flex items-center gap-2`}
        onClick={() => setType('kanban')}
      >
        <Kanban />
        Board
      </button>
    </div>
  );
};

export default SwitcherView;

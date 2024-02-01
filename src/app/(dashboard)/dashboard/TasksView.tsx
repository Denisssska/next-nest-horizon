'use client';

import { useState } from 'react';
import SwitcherView from './SwitcherView';
import KanbanView from './kanban-view/KanbanView';
import ListView from './list-view/ListView';
export type TypeView = 'list' | 'kanban';

const TasksView = () => {
  const [type, setType] = useState<TypeView>('list');
  return (
    <div>
      <SwitcherView type={type} setType={setType} />
      {type === 'list' ? <ListView /> : <KanbanView />}
    </div>
  );
};

export default TasksView;

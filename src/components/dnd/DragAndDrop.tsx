'use client';

import { IcardsData, cardsData } from '@/constants/cardsData';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';

const DragAndDrop = () => {
  const [data, setData] = useState<Array<IcardsData>>(cardsData);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const newData = [...data];
    const oldDroppableIndex = newData.findIndex(x => x.id === +source.droppableId.split('droppable')[1]);
    const newDroppableIndex = newData.findIndex(x => x.id === +destination.droppableId.split('droppable')[1]);
    const [item] = newData[oldDroppableIndex].components.splice(source.index, 1);
    console.log(destination);

    newData[newDroppableIndex].components.splice(destination.index, 0, item);
    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h1 className='text-center font-bold text-primary my-10 text-xl'>DragAndDrop</h1>
        <div className='flex justify-between my-10 mx-5 gap-5'>
          {data.map(item => (
            <Droppable droppableId={`droppable${item.id}`} key={item.id}>
              {provided => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className=' border border-dashed border-border w-1/3 p-4 '
                >
                  <h2 className='text-center'>{item.title}</h2>
                  {item.components.map((comp, index) => (
                    <Draggable draggableId={`draggable${comp.id}`} index={index} key={comp.id}>
                      {provided => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className='p-4 m-4 border border-border bg-gray-400 text-slate-800'
                        >
                          {comp.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragAndDrop;

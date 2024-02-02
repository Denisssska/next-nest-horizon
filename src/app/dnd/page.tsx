import DragAndDrop from '@/components/dnd/DragAndDrop';
import { delay } from '@/lib/delay';

const Drag = async () => {
  await delay(2000);
  return <DragAndDrop />;
};

export default Drag;

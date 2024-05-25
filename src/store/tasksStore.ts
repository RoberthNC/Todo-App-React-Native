import {create} from 'zustand';
import {Task} from '../interfaces';

interface State {
  taskList: Task[];
  add: (description: string) => void;
}

const data: Task[] = [
  {
    id: 1,
    description: 'Comer',
    status: false,
  },
  {
    id: 2,
    description: 'Dormir',
    status: true,
  },
  {
    id: 3,
    description: 'Leer',
    status: false,
  },
];

export const useTaskStore = create<State>()((set, get) => ({
  taskList: data,
  add: (description: string) => {
    const tasksStore = get().taskList;
    const task = {
      id: ++tasksStore.length,
      description: description,
      status: false,
    };
    tasksStore.push(task);
    set({taskList: [...tasksStore]});
  },
}));

import {create} from 'zustand';
import {Task} from '../interfaces';

interface State {
  taskList: Task[];
  add: (description: string) => void;
}

export const useTaskStore = create<State>()((set, get) => ({
  taskList: [
    {
      id: 1,
      description: '1',
      status: false,
    },
    {
      id: 2,
      description: '2',
      status: true,
    },
    {
      id: 3,
      description: '3',
      status: false,
    },
    {
      id: 4,
      description: '4',
      status: true,
    },
    {
      id: 5,
      description: '5',
      status: false,
    },
    {
      id: 6,
      description: '6',
      status: true,
    },
  ],
  add: (description: string) => {
    const tasksStore = get().taskList;
    const task = {
      id: ++tasksStore.length,
      description: description,
      status: false,
    };
    tasksStore.push(task);
    console.log(tasksStore);
    set({taskList: [...tasksStore]});
  },
}));

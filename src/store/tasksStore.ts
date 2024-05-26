import {create} from 'zustand';
import {Task} from '../interfaces';

interface State {
  taskList: Task[];
  add: (description: string) => void;
  update: (id: number) => void;
  delete: (id: number) => void;
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
  // TODO: Fix issue inside of add method
  add: (description: string) => {
    const tasks = get().taskList;
    const task = {
      id: ++tasks.length,
      description: description,
      status: false,
    };
    tasks.push(task);
    console.log('Task Store: ', tasks);
    set({taskList: [...tasks]});
  },
  update: (id: number) => {
    const tasks = get().taskList;
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, status: !task.status};
      } else {
        return task;
      }
    });
    set({taskList: [...updatedTasks]});
  },
  delete: (id: number) => {
    const tasks = get().taskList;
    const updatedTasks = tasks.filter(task => task.id !== id);
    set({taskList: [...updatedTasks]});
  },
}));

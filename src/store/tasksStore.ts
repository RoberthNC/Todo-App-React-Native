import {create} from 'zustand';
import {Task} from '../interfaces';
import {Filter} from '../enums';

interface State {
  filter: Filter;
  filteredTaskList: Task[];
  taskList: Task[];
  load: () => void;
  add: (description: string) => void;
  update: (id: number) => void;
  delete: (id: number) => void;
  filterTasks: (filter: Filter) => void;
}

export const useTaskStore = create<State>()((set, get) => ({
  filter: Filter.all,
  filteredTaskList: [],
  taskList: [
    {
      id: 1,
      description: 'Almorzar',
      status: false,
    },
    {
      id: 2,
      description: 'Desayunar',
      status: true,
    },
    {
      id: 3,
      description: 'Estudiar',
      status: false,
    },
    {
      id: 4,
      description: 'Dormir',
      status: true,
    },
  ],
  load: () => {
    const tasks = get().taskList;
    set({filteredTaskList: [...tasks]});
  },
  add: (description: string) => {
    const tasks = get().taskList;
    const task = {
      id: tasks[tasks.length - 1].id + 1,
      description: description,
      status: false,
    };
    set({taskList: [...tasks, task]});
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
    get().load();
  },
  delete: (id: number) => {
    const tasks = get().taskList;
    const updatedTasks = tasks.filter(task => task.id !== id);
    set({taskList: [...updatedTasks]});
    get().load();
  },
  filterTasks: (filter: Filter) => {
    let filterTasks;
    const tasks = get().taskList;
    set({filter: filter});
    switch (filter) {
      case 'all':
        set({filteredTaskList: tasks});
        break;
      case 'active':
        filterTasks = tasks.filter(task => task.status === false);
        set({filteredTaskList: filterTasks});
        break;
      case 'done':
        filterTasks = tasks.filter(task => task.status === true);
        set({filteredTaskList: filterTasks});
        break;
    }
  },
}));

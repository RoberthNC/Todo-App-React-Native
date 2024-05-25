import {create} from 'zustand';
import {Task} from '../interfaces';

interface State {
  taskList: Task[];
}

const data: Task[] = [
  {
    id: 'e4eaaaf2-d142-11e1-b3e4-080027620cdd',
    description: 'Comer',
    status: false,
  },
  {
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    description: 'Dormir',
    status: true,
  },
  {
    id: '3d3c68b5-071d-4fb3-b4ed-29b2b0a21e54',
    description: 'Leer',
    status: false,
  },
];

export const useTaskStore = create<State>()((set, get) => ({
  taskList: data,
}));

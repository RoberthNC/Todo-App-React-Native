import {Text, View} from 'react-native';
import {Task} from './';
import {useTaskStore} from '../../store/tasksStore';

export const TaskList = () => {
  const taskList = useTaskStore(state => state.taskList);
  const filteredTaskList = useTaskStore(state => state.filteredTaskList);
  const filter = useTaskStore(state => state.filter);
  return (
    <View>
      {taskList.map(({id, description, status}) => (
        <Task key={id} id={id} description={description} status={status} />
      ))}
    </View>
  );
};

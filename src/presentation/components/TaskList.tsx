import {View} from 'react-native';
import {Task} from './';
import {useTaskStore} from '../../store/tasksStore';

export const TaskList = () => {
  const taskList = useTaskStore(state => state.taskList);
  return (
    <View>
      {taskList.map(({id, description, status}) => (
        <Task key={id} id={id} description={description} status={status} />
      ))}
    </View>
  );
};

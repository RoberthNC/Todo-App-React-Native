import {View} from 'react-native';
import {Task} from './';
import {useTaskStore} from '../../store/tasksStore';
import {globalStyles} from '../../config/theme/app-theme';

export const TaskList = () => {
  const taskList = useTaskStore(state => state.taskList);

  return (
    <View style={globalStyles.containerTaskList}>
      {taskList.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </View>
  );
};

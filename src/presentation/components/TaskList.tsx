import {FlatList, View} from 'react-native';
import {Task} from './';
import {useTaskStore} from '../../store/tasksStore';
import {globalStyles} from '../../config/theme/app-theme';

export const TaskList = () => {
  const taskList = useTaskStore(state => state.taskList);

  return (
    <FlatList
      data={taskList}
      keyExtractor={item => item.id.toString()}
      nestedScrollEnabled
      renderItem={({item}) => <Task {...item} />}
      style={globalStyles.containerTaskList}
    />
  );
};

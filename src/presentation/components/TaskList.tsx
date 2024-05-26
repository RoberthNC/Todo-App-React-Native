import {useEffect} from 'react';
import {View} from 'react-native';
import {Task} from './';
import {useTaskStore} from '../../store/tasksStore';

export const TaskList = () => {
  const load = useTaskStore(state => state.load);
  const filteredTaskList = useTaskStore(state => state.filteredTaskList);

  useEffect(() => {
    load();
  }, []);

  return (
    <View>
      {filteredTaskList.map(({id, description, status}) => (
        <Task key={id} id={id} description={description} status={status} />
      ))}
    </View>
  );
};

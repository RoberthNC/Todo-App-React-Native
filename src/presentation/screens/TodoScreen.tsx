import IonIcons from 'react-native-vector-icons/Ionicons';
import {View, Text, ScrollView} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {ButtonFilter, FormTask, TaskList} from '../components';
import {useTaskStore} from '../../store/tasksStore';
import {Filter} from '../../enums';

export const TodoScreen = () => {
  const filterTasks = useTaskStore(state => state.filterTasks);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={globalStyles.titleContainer}>
        <IonIcons size={36} name="list-outline" />
        <Text style={globalStyles.title}>Tasks</Text>
      </View>
      <View style={globalStyles.buttonsContainer}>
        <ButtonFilter
          color={colors.yellow}
          label="All"
          onPress={() => filterTasks(Filter.all)}
        />
        <ButtonFilter
          color={colors.green}
          label="Active"
          onPress={() => filterTasks(Filter.active)}
        />
        <ButtonFilter
          color={colors.green}
          label="Done"
          onPress={() => filterTasks(Filter.done)}
        />
      </View>
      <FormTask />
      <TaskList />
    </ScrollView>
  );
};

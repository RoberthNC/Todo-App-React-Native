import {View, Pressable, Text} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {useTaskStore} from '../../store/tasksStore';

interface Props {
  id: number;
  description: string;
  status: boolean;
}

export const Task = ({id, description, status}: Props) => {
  const updateTask = useTaskStore(state => state.update);
  const deleteTask = useTaskStore(state => state.delete);

  return (
    <View style={globalStyles.containerTask}>
      <View style={globalStyles.leftContainer}>
        <Pressable
          onPress={() => updateTask(id)}
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}>
          <Ion
            style={{
              ...globalStyles.statusIcon,
              backgroundColor: status ? colors.yellow : colors.green,
            }}
            name={status ? 'checkmark-outline' : 'reload-outline'}
            size={30}
          />
        </Pressable>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.taskDescription}>
          {description}
        </Text>
      </View>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.8 : 1,
          },
        ]}
        onPress={() => deleteTask(id)}>
        <Ion style={globalStyles.deleteTask} name={'trash-outline'} size={30} />
      </Pressable>
    </View>
  );
};

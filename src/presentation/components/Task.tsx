import {View, Pressable, Text} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../config/theme/app-theme';

interface Props {
  id: string;
  description: string;
  status: boolean;
}

export const Task = ({id, description, status}: Props) => {
  return (
    <View style={globalStyles.containerTask}>
      <View style={globalStyles.leftContainer}>
        <Pressable>
          <Ion
            style={globalStyles.statusIcon}
            name={'reload-outline'}
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
      <Pressable>
        <Ion style={globalStyles.deleteTask} name={'trash-outline'} size={30} />
      </Pressable>
    </View>
  );
};

import {View, Text, Pressable, TextInput} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const TodoScreen = () => {
  return (
    <View>
      <Text>TO-DO Task</Text>
      <View>
        <Pressable>
          <Text>All</Text>
        </Pressable>
        <Pressable>
          <Text>Active</Text>
        </Pressable>
        <Pressable>
          <Text>Completed</Text>
        </Pressable>
      </View>
      <View>
        <Text>List of tasks</Text>
      </View>
      <View>
        <TextInput />
        <Pressable>
          <Text>Add New</Text>
        </Pressable>
      </View>
    </View>
  );
};

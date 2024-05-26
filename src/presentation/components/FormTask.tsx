import {View, TextInput, Pressable, Text} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';
import {useState} from 'react';
import {useTaskStore} from '../../store/tasksStore';

export const FormTask = () => {
  const [description, setDescription] = useState<string>('');
  const add = useTaskStore(state => state.add);
  const load = useTaskStore(state => state.load);

  const createTask = () => {
    add(description);
    load();
    setDescription('');
  };

  return (
    <View style={globalStyles.containerForm}>
      <TextInput
        onChangeText={setDescription}
        style={globalStyles.inputTask}
        value={description}
      />
      <Pressable
        onPress={createTask}
        style={({pressed}) => [
          {
            ...globalStyles.submitButton,
            ...globalStyles.submitButtonText,
            opacity: pressed ? 0.8 : 1,
          },
        ]}>
        <Text style={globalStyles.addButtonText}>Add New</Text>
      </Pressable>
    </View>
  );
};

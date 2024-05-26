import {useState} from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {useTaskStore} from '../../store/tasksStore';
import {Error} from './';

export const FormTask = () => {
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const add = useTaskStore(state => state.add);
  const load = useTaskStore(state => state.load);

  const createTask = () => {
    if (description === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3500);
      return;
    }
    add(description);
    load();
    setDescription('');
  };

  return (
    <View style={globalStyles.containerForm}>
      <TextInput
        onChangeText={setDescription}
        style={{
          ...globalStyles.inputTask,
          borderColor: error ? colors.white : '',
          borderWidth: error ? 1.5 : 0,
        }}
        value={description}
      />
      {error && <Error />}
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

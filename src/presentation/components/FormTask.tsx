import {View, TextInput, Pressable, Text} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const FormTask = () => {
  return (
    <View style={globalStyles.containerForm}>
      <TextInput style={globalStyles.inputTask} />
      <Pressable
        style={({pressed}) => [
          {
            ...globalStyles.submitButton,
            ...globalStyles.submitButtonText,
            opacity: pressed ? 0.8 : 1,
          },
        ]}>
        <Text>Add New</Text>
      </Pressable>
    </View>
  );
};

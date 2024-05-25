import IonIcons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {ButtonFilter, FormTask} from '../components';

export const TodoScreen = () => {
  return (
    <View>
      <View style={globalStyles.titleContainer}>
        <IonIcons size={36} name="list-outline" />
        <Text style={globalStyles.title}>Tasks</Text>
      </View>
      <View style={globalStyles.buttonsContainer}>
        <ButtonFilter
          color={colors.yellow}
          label="All"
          onPress={() => console.log('All')}
        />
        <ButtonFilter
          color={colors.green}
          label="Active"
          onPress={() => console.log('Active')}
        />
        <ButtonFilter
          color={colors.green}
          label="Done"
          onPress={() => console.log('Done')}
        />
      </View>
      <View>
        <Text>List of tasks</Text>
      </View>
      <FormTask />
    </View>
  );
};

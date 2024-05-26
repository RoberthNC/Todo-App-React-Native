import {Text} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const Error = () => {
  return <Text style={globalStyles.errorMessage}>Required field</Text>;
};

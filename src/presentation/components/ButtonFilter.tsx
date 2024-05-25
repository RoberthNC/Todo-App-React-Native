import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

interface Props {
  color: string;
  label: string;
  onPress: () => void;
}

export const ButtonFilter = ({color, label, onPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{...globalStyles.buttonText, color: color, borderColor: color}}>
        {label}
      </Text>
    </Pressable>
  );
};

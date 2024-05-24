import {StyleSheet} from 'react-native';

const colors = {
  green: '#21C6BD',
  orange: '#EA6D4F',
  pink: '#CF2E87',
  purple: '#250743',
  white: '#FEFFFE',
  yellow: '#F3AB14',
};

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

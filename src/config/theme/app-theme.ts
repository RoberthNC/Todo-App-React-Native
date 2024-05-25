import {StyleSheet} from 'react-native';

export const colors = {
  darkPurple: '#42285D',
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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonText: {
    borderRadius: 20,
    borderWidth: 3,
    fontSize: 20,
    fontWeight: '300',
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  containerForm: {
    display: 'flex',
    gap: 15,
    marginTop: 30,
  },
  inputTask: {
    backgroundColor: colors.darkPurple,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: colors.pink,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: 90,
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    color: colors.white,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
});

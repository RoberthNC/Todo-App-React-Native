import {StyleSheet} from 'react-native';

export const colors = {
  black: '#000000',
  darkPurple: '#42285D',
  green: '#21C6BD',
  orange: '#EA6D4F',
  pink: '#CF2E87',
  purple: '#250743',
  white: '#FEFFFE',
  yellow: '#F3AB14',
};

export const globalStyles = StyleSheet.create({
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
  container: {
    backgroundColor: colors.purple,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  containerForm: {
    display: 'flex',
    gap: 15,
    marginTop: 30,
  },
  containerTask: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  containerTaskList: {
    display: 'flex',
    gap: 15,
    marginTop: 30,
  },
  deleteTask: {
    backgroundColor: colors.orange,
    borderRadius: 100,
    padding: 10,
    width: 50,
  },
  inputTask: {
    backgroundColor: colors.darkPurple,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusIcon: {
    backgroundColor: 'black',
    borderRadius: 100,
    padding: 10,
    width: 50,
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
  taskDescription: {
    color: colors.black,
    fontSize: 20,
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

import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontSize: width * 0.068,
    marginVertical: height * 0.031,
  },
  input: {
    backgroundColor: '#ffffff80',
    height: height * 0.052,
    width: width * 0.795,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.045,
    paddingHorizontal: width * 0.018,
    paddingVertical: height * 0.01,
  },
  picker: {
    height: height * 0.105,
    width: width * 0.455,
    marginBottom: height * 0.105,
  },
  eachPicker: {
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ffffff80',
    borderRadius: width * 0.045,
    height: height * 0.261,
    paddingVertical: height * 0.01,
  },
  button: {
    padding: height * 0.007,
    marginTop: height * 0.031,
    fontSize: width * 0.05,
    color: 'blue',
    textAlign: 'center',
    marginBottom: height * 0.017,
    borderWidth: 1,
    width: width * 0.909,
    height: height * 0.042,
    backgroundColor: '#ffffff80',
    borderRadius: width * 0.045,
  },
  result: {
    fontSize: width * 0.041,
    textAlign: 'center',
    marginTop: height * 0.017,
  },
  pickerView: {
    flexDirection: 'row',
    gap: width * 0.023,
  },
  inputContainer: {
    marginTop: height * 0.021,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  clearIcon: {
    height: width * 0.068,
    width: width * 0.068,
    objectFit: 'cover',
    tintColor: 'blue',
  },
  label: {
    fontSize: width * 0.045,
    color: 'grey',
  },
});
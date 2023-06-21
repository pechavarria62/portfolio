import {StyleSheet} from 'react-native';
import {theme} from '../../config/custom';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary[500],
    height: 200,
  },
  avatar: {
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  //   name: {
  //     fontSize: 22,
  //     color: "#fff",
  //     fontWeight: '600',
  //   },
    body: {
    marginTop: 40,
    },
    bodyContent: {
    //flex: 1,
    alignItems: 'center',
    padding: 30,
    },
    name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
    },
    info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
    },
    description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
    },
});
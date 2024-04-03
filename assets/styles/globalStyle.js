import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const style = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 50,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: 'white',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default style;

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MapComponent from '../components/MapComponent';
import {parameters, colors} from '../globals/style';
import {Avatar, Icon} from 'react-native-elements';
import {Image} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const RequestScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={26}
        />
      </View>
      <View style={styles.view2}>
        <TouchableOpacity>
          <View style={styles.view3}>
            <Avatar
              rounded
              source={require('../../assets/blankProfilePic.jpg')}
              avatarStyle={''}
              size={30}
            />
            <Text style={{marginLeft: 5}}>For Someone</Text>
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.view4}>
          <View>
            <Image
              style={styles.image1}
              source={require('../../assets/transit.png')}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('DestinationScreen')}>
              <View style={styles.view6}>
                <Text style={styles.text1}>From Where?</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.view7}>
              <TouchableOpacity>
                <View style={styles.view6}>
                  <Text style={styles.text10}>...</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.view8}>
                <Icon
                  type="material-community"
                  name="plus-thick"
                  color={colors.black}
                  size={25}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <MapComponent />
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container1: {flex: 1, paddingTop: parameters.statusBarHeight},

  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  view1: {
    position: 'absolute',
    top: 25,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    zIndex: 8,
  },

  view2: {
    height: SCREEN_HEIGHT * 0.21,
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: colors.white,
  },

  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    //height:30,
    zIndex: 10,
  },
  view4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view5: {
    backgroundColor: colors.grey7,
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
  view6: {
    backgroundColor: colors.grey6,
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 0,
  },
  text1: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.grey1,
  },

  image1: {height: 70, width: 30, marginRight: 10, marginTop: 10},
  view7: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view8: {
    marginLeft: 10,
  },
  view10: {
    alignItems: 'center',
    flex: 5,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: colors.grey5,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  view11: {
    backgroundColor: colors.grey,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 15,
  },

  contentContainer: {
    backgroundColor: 'white',
  },

  view12: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey4,
  },

  text2: {
    fontSize: 18,
    color: colors.grey1,
  },
  text3: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    marginRight: 5,
  },

  text4: {color: colors.grey2, marginTop: 4},

  view13: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  button1: {
    height: 40,
    width: 100,
    backgroundColor: colors.grey6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  button2: {
    height: 50,
    backgroundColor: colors.grey10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 30,
  },

  button1Text: {
    fontSize: 17,
    marginTop: -2,
    color: colors.black,
  },

  button2Text: {
    color: colors.white,
    fontSize: 23,
    marginTop: -2,
  },

  view14: {
    alignItems: 'center',
    flex: 5,
    flexDirection: 'row',
  },
  view15: {
    backgroundColor: colors.grey6,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  view16: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  text5: {
    fontSize: 12,
    color: colors.black,
    marginLeft: 3,
    fontWeight: 'bold',
    paddingBottom: 1,
  },

  view17: {},

  view18: {},

  view19: {flex: 1.7, alignItems: 'flex-end'},

  icon: {paddingBottom: 2},

  image2: {height: 60, width: 60},

  view20: {marginRight: 10},

  text6: {
    fontSize: 15,
    color: colors.black,
    fontWeight: 'bold',
  },

  view21: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 15,
  },

  view22: {
    alignItems: 'center',
    marginBottom: -20,
  },

  sectionHeaderContainer: {
    backgroundColor: 'white',
    marginTop: 30,
    paddingLeft: 15,
  },

  text7: {
    fontSize: 28,
    color: colors.black,
    marginRight: 5,
  },

  text8: {
    fontSize: 15,
    color: colors.grey2,
    textDecorationLine: 'line-through',
  },

  button3: {
    height: 60,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH - 110,
    marginBottom: 10,
  },

  view23: {
    flexDirection: 'row',
    backgroundColor: colors.cardbackground,
    // elevation:10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    height: 80,
  },

  button2Image: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey6,
    marginBottom: 10,
  },
  text9: {fontSize: 15, color: colors.grey1},

  map: {
    marginVertical: 0,
    width: SCREEN_WIDTH,
    zIndex: -1,
  },

  centeredView: {
    zIndex: 14,
  },
  modalView: {
    marginHorizontal: 20,
    marginVertical: 60,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 16,
  },

  view24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  flatlist: {
    marginTop: 20,
  },

  text10: {color: colors.grey2, paddingLeft: 10},
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Ionicons';
import logo from '../assets/MediSage.png';
import {connect} from 'react-redux';
import * as actions from '../actions';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus condimentum, faucibus augue sed, bibendum massa. ',
          subtext: 'Lorem ipsum dolor sit amet',
          time: '13:20 hrs(IST)',
          date: '25th',
          month: 'November',
          img: require('../assets/doctorpatient.jpeg'),
        },
        {
          id: 2,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus condimentum, faucibus augue sed, bibendum massa. ',
          subtext: 'Lorem ipsum dolor sit amet',
          time: '13:20 hrs(IST)',
          date: '25th',
          month: 'November',
          img: require('../assets/doctorpatient.jpeg'),
        },
        {
          id: 3,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus condimentum, faucibus augue sed, bibendum massa. ',
          subtext: 'Lorem ipsum dolor sit amet',
          time: '13:20 hrs(IST)',
          date: '25th',
          month: 'November',
          img: require('../assets/doctorpatient.jpeg'),
        },
        {
          id: 4,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus condimentum, faucibus augue sed, bibendum massa. ',
          subtext: 'Lorem ipsum dolor sit amet',
          time: '13:20 hrs(IST)',
          date: '25th',
          month: 'November',
          img: require('../assets/doctorpatient.jpeg'),
        },
        {
          id: 5,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus condimentum, faucibus augue sed, bibendum massa. ',
          subtext: 'Lorem ipsum dolor sit amet',
          time: '13:20 hrs(IST)',
          date: '25th',
          month: 'November',
          img: require('../assets/doctorpatient.jpeg'),
        },
        {
          id: 6,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus condimentum, faucibus augue sed, bibendum massa. ',
          subtext: 'Lorem ipsum dolor sit amet',
          time: '13:20 hrs(IST)',
          date: '25th',
          month: 'November',
          img: require('../assets/doctorpatient.jpeg'),
        },
      ],
    };
  }
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            paddingTop: 15,
            paddingHorizontal: 15,
            paddingBottom: 15,
            position: 'absolute',
            top: 0,
            zIndex: 999,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <Icon name="menu" size={25} color="#0C5397" />
          <Image
            source={logo}
            style={{width: '50%', height: 30}}
            resizeMode="contain"
          />
          <Icon4 name="notifications-outline" size={25} color="#0C5397" />
        </View>
        <ScrollView style={{flex: 1, width: '100%',marginTop:60}}>
          {this.state.cards?.map(item => {
            return (
              <View
                style={{
                  paddingVertical: 15,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  margin: 10,
                  shadowColor: '#171717',
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 10,
                  paddingHorizontal: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                     
                    }}>
                    <Text
                      style={{
                        color: '#0C5397',
                        lineHeight: 30,
                        fontSize: 28,
                      }}>
                      {item.date}
                    </Text>
                    <Text style={{color: '#000', lineHeight: 14, fontSize: 12}}>
                      {item.month}
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={item.img}
                      style={{width: 150, height: 100, borderRadius: 8}}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#000',
                      lineHeight: 14,
                      fontSize: 13,
                      fontWeight: '600',
                    }}>
                    {item.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 8,
                      alignItems:"center"
                    }}>
                    <Text style={{color: 'grey', lineHeight: 14, fontSize: 12}}>
                      {item.subtext}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon4 name="time-outline" size={20} color="#0C5397" />

                      <Text
                        style={{
                          marginLeft: 5,
                          color: '#000',
                          lineHeight: 14,
                          fontSize: 12,
                        }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        Register Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                      <Text style={{color: '#fff', textAlign: 'center'}}>
                        Details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.largebUttonContainer}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: '#0C5397',
                        textAlign: 'center',
                        fontWeight: '600',
                      }}>
                      Invite
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps, actions, null)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#0C5397',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '45%',
  },
  largebUttonContainer: {
    backgroundColor: '#fff  ',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0C5397',
    width: '100%',
    marginVertical:10
  },
});

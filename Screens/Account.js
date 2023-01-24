import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import * as actions from '../actions';
import Modal from 'react-native-modal';

var axios = require('axios');

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  componentDidMount() {
  }
  
  render() {
    return  (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 15,
          backgroundColor: '#343244',
        }}>
        <Text>Hello</Text>
      </View>
    
    );
  }
}
function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps, actions, null)(Account);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#343244',
  },
  textInputStyle: {
    borderWidth: 1,
    width: '40%',
  },
  buttonContainer: {
    backgroundColor: '#2F2C3D',
    color: '#fff',
    padding: 10,
    margin: 8,
    borderRadius: 5,
    width: '90%',
    marginTop: 50,
    borderWidth: 0.5,
    borderColor: '#FFF',
  },
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import InputField from '../atom/InputField';
import SignInButton from '../atom/SignInButton';
import LoginOptions from '../molecule/LoginOptions';
import SignTabs from '../molecule/SignTabs';


const LogInPage = () => {
  const [selectedTab, setSelectedTab] = useState('Sign In');


  const handleTabPress = (tab:any) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image} />
     
        <SignTabs underlineState={'Sign In'}/>

        <InputField title='Email Address' placeholder='Enter your email...'/>
        <InputField title='Password' placeholder='Enter your password...'/>
        
        <View style={styles.signInBoox}>
          <TouchableOpacity style={styles.spaceBetween}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.spaceBetween}>
            <SignInButton />
          </TouchableOpacity>
        </View>

        <LoginOptions />
    </View>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  spaceBetween: {
    paddingHorizontal: 20
  },
  image: {
    marginTop:100,
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  forgotPassword: {
    fontSize: 13,
    fontWeight: '700'
  },
  signInBoox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  testBox: {
    backgroundColor: 'red',
    width: 10,
    height: 10
  }
});

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import InputField from '../atom/InputField';
import SignInButton from '../atom/SignInButton';
import SignOptions from '../atom/SignOptions';


const LogInPage = () => {
  const [selectedTab, setSelectedTab] = useState('Sign In');


  const handleTabPress = (tab:any) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image} />
     
        <View style={styles.modus}>
            <TouchableOpacity style={styles.tabButton} onPress={() => handleTabPress('Sign In')}>
                <Text style={[styles.signButton, selectedTab === 'Sign In' && styles.selectedTab]}>
                  Sign In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabButton} onPress={() => handleTabPress('Sign Up')}>
                <Text style={[styles.signButton, selectedTab === 'Sign Up' && styles.selectedTab]}>
                  Sign Up
                </Text>
            </TouchableOpacity>
        </View>

        <InputField title='Email Address' />
        <InputField title='Password' />
        
        <View style={styles.signInBoox}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.tabButton}>
            <SignInButton />
          </TouchableOpacity>
        </View>

        <Text style={styles.logInOptionsText}>Or use a social account to login</Text>
        <View style={styles.signInOptions}>
          <SignOptions />
        </View>
    </View>
  );
};

export default LogInPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    marginTop:150,
    width: '100%',
    height: 70,
    resizeMode: 'contain',
  },
  modus: {
    flexDirection: 'row',
    marginTop: 60,
    marginBottom: 40
  },
  tabButton: {
    paddingHorizontal: 20,
  },
  signButton: {
    color: '#3EC100',
    fontWeight: '700',
    fontSize: 20,
  },
  selectedTab: {
    textDecorationLine: 'underline',
    textDecorationColor: '#000',
    textDecorationStyle: 'solid',
    paddingBottom: 40,
  },
  forgotPassword: {
    fontSize: 13,
    fontWeight: '700'
  },
  signInBoox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  signInOptions: {
    flexDirection: 'row'
  },
  testBox: {
    backgroundColor: 'red',
    width: 10,
    height: 10
  },
  logInOptionsText: {
    color: '#646464',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 40,
    marginBottom: 20
  }
});

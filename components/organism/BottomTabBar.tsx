import { StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import React from 'react'
import BottomTabicon from '../atom/BottomTabicon'
import AddIcon from '../atom/AddIcon'

const {width, height} = Dimensions.get('window')
const homeIcon = require('../../assets/images/BottomNavIcons/home.png');
const historyIcon = require('../../assets/images/BottomNavIcons/history.png');
const profileIcon = require('../../assets/images/BottomNavIcons/profile.png');
const savedIcon = require('../../assets/images/BottomNavIcons/saved.png');


const BottomTabBar = () => {
  return (
    <View style={styles.container}>
        <BottomTabicon iconUrl={homeIcon} text="Home"/> 
        <BottomTabicon iconUrl={savedIcon} text="Favourite"/>
        <AddIcon />
        <BottomTabicon iconUrl={historyIcon} text="History"/>
        <BottomTabicon iconUrl={profileIcon} text="Profile"/>
    </View>
  )
}

export default BottomTabBar

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0F0F0',
        height: height * 0.1,
        width: width * 1,
        position: 'absolute',
        bottom: 0,
        opacity: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 35,
        paddingRight: 35
    },

})
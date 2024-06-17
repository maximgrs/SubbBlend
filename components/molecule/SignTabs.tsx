import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SignTabs = ({underlineState}:{underlineState:any}) => {
    const [selectedTab, setSelectedTab] = useState(underlineState);


  const handleTabPress = (tab:any) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.modus}>
        <TouchableOpacity style={styles.tabButton} onPress={() => handleTabPress('Sign In')}>
            <Text style={styles.signButton}>
                Sign In
            </Text>
            <View style={[selectedTab === 'Sign In' && styles.underline]}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} onPress={() => handleTabPress('Sign Up')}>
            <Text style={styles.signButton}>
                Sign Up
            </Text>
            <View style={[selectedTab === 'Sign Up' && styles.underline]}></View>
        </TouchableOpacity>
    </View>
  )
}

export default SignTabs

const styles = StyleSheet.create({
    modus: {
        flexDirection: 'row',
        marginTop: 40,
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
    underline: {
        height: 3,
        backgroundColor: '#FE5524',
        marginTop: 5,
    }
})
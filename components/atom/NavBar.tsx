import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'


const NavBar = () => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Favourite', 'Saved', 'Best Mixes', 'Overview'];
  
    const handleTabPress = (tab: React.SetStateAction<string>) => {
      setActiveTab(tab);
    };
  
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {tabs.map((tab, index) => (
            <TouchableOpacity key={index} style={styles.tab} onPress={() => handleTabPress(tab)}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
}

export default NavBar

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
      },
      scrollContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      tab: {
        marginHorizontal: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
      },
      tabText: {
        fontSize: 24,
        color: '#333',
      },
    
      activeTabText: {
        fontWeight: 'bold',
      },
})
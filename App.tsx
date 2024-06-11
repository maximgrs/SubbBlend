import { StyleSheet, View, Text, ScrollView } from 'react-native';
import NavBar from './components/atom/NavBar';
import CreateOwnShakeBox from './components/molecule/CreateOwnShakeBox';


export default function App() {
  return (
    <View style={styles.container}>
    <NavBar />
    <CreateOwnShakeBox />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  textContent: {
    fontSize: 18,
    marginVertical: 20,
  },
});

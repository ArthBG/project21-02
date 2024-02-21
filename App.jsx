import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard name="BG" bio={'Cursando desenvolvimento de sistemas'} course={'Desenvolvimento de sistemas'} picture={require('./assets/images/bgprofile.jpg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

const alunos =[
  {
    name: 'BG',
    bio: 'Cursando desenvolvimento de sistemas',
    course: 'Desenvolvimento de sistemas',
    picture: require('./assets/images/bgprofile.jpg')
  },
  {
    name: 'BG',
    bio: 'Cursando desenvolvimento de sistemas',
    course: 'Desenvolvimento de sistemas',
    picture: require('./assets/images/bgprofile.jpg')
  },
  {
    name: 'BG',
    bio: 'Cursando desenvolvimento de sistemas',
    course: 'Desenvolvimento de sistemas',
    picture: require('./assets/images/bgprofile.jpg')
  },
  {
    name: 'BG',
    bio: 'Cursando desenvolvimento de sistemas',
    course: 'Desenvolvimento de sistemas',
    picture: require('./assets/images/bgprofile.jpg')
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard alunos={alunos}/>
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

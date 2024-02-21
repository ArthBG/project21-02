import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ProfileCard = ({ alunos }) => {
  return (
    <View>
        {alunos.map((aluno, index) => (
            <View key={index}>
            <Image style={styles.Image} source={aluno.picture} />
            <Text>{aluno.name}</Text>
            <Text>{aluno.bio}</Text>
            <Text>{aluno.course}</Text>
            </View>
        ))}
         
    </View>
  )
}

const styles = StyleSheet.create({
    Image: {
        width: 100,
        height: 100,
        borderRadius: 5
    }
})



export default ProfileCard


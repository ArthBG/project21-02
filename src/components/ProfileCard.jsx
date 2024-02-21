import React from 'react'
import { View, Text, Image } from 'react-native'

const ProfileCard = ({ name, course, bio, picture }) => {
  return (
    <View>
        <Image source={picture} style={{width: 200, height: 200}} />	
        <Text>{name}</Text>
        <Text>{course}</Text>
        <Text>{bio}</Text>
         
    </View>
  )
}

export default ProfileCard
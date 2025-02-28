import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const FormLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='complaintForm' options={{ headerShown: false }}/>
      <Stack.Screen name='confirmationScreen' options={{ headerShown: false }}/>
    </Stack>
  )
}

export default FormLayout
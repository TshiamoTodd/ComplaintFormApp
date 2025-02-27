import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const SignInPage = () => {
  return (
    <View className='flex-1 w-full'>
      <View className='w-full h-[20%] p-5 justify-center'>
        <View className='flex'>
            <Text className='text-4xl text-purple-400 font-bold mt-8'>Sign In.</Text>
            <Text className='text-sm text-gray-400'>Welcome back. Lets continue.</Text>
        </View>
      </View>

      <View className='flex justify-between w-full h-[80%] p-2'>
        <View className='w-full py-2 rounded-2xl justify-center'>
            <View className='flex gap-2 w-full px-5 mb-3'>
                <Text>Email</Text>
                <TextInput 
                    className='p-2 border border-gray-300 rounded-full' 
                    placeholder='youremail@mail.com'
                    placeholderTextColor={'gray'}
                />
            </View>
            <View className='flex gap-2 w-full px-5 mb-3'>
                <Text>Paasword</Text>
                <TextInput 
                    className='p-2 border border-gray-300 rounded-full' 
                    placeholder='********'
                    placeholderTextColor={'gray'}
                    secureTextEntry
                />
            </View>
            <View className='w-full px-5 mb-3'>
                <TouchableOpacity
                    className='bg-purple-500 px-4 py-4 mt-4 rounded-full w-full items-center justify-center'
                    onPress={() => {router.replace('/home')}}
                >
                    <Text className='text-white'>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className='w-full p-5 items-center justify-center'>
            <Text>
                Don't have an account? 
                <TouchableOpacity className='m-0'>
                    <Text className='text-purple-500'> Sign Up</Text>
                </TouchableOpacity>
            </Text>
        </View>
      </View>
    </View>
  )
}

export default SignInPage
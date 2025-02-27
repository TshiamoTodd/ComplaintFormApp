import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const Navbar = ({isForm}: {isForm: boolean}) => {
  return (
    <View className='w-full h-20 bg-gray-100 shadow flex flex-row items-center justify-between p-2'>
      {isForm ? (
        <View className='flex'>
          <Text className='text-3xl font-bold text-purple-500'>Complaint Form</Text>
          <Text className='text-sm font-thin text-gray-400'>Create your complaint form here.</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => router.push('/complaintForm')}
          className='bg-purple-500 px-4 py-4 rounded-lg w-[50%] items-center justify-center'
        >
          <Text className='text-sm text-white'>Make a Complaint</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity>
        <AntDesign name="menu-unfold" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar
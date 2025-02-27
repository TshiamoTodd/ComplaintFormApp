import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const OnboardingPage = () => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Image
                source={require('@/assets/images/logo.png')}
                style={{ width: 200, height: 100, resizeMode: 'contain' }}
                
            />
            <View className='flex items-center justify-center'>
                <Text className='text-2xl text-purple-500 font-bold mt-1'>
                    Complaint Management System!
                </Text>
                <Text className='text-xs text-gray-400'>
                    All your issues managed in one central place.
                </Text>
            </View>

            <View className='w-full flex items-center justify-center mt-4'>
                <TouchableOpacity
                    className='bg-purple-500 px-4 py-4 mt-4 rounded-full w-[50%] items-center justify-center'
                    onPress={() => {router.push('/sign-in')}}
                >
                    <Text className='text-white'>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OnboardingPage;
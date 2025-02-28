import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RelativePathString, router, useLocalSearchParams } from 'expo-router'
import Divider from '@/components/Divider'

const confirmationScreen = () => {
    const {data} = useLocalSearchParams()
    const parsedData = Array.isArray(data) ? data.map(item => JSON.parse(item)) : JSON.parse(data)

    return (
        <SafeAreaView className='w-full h-full'>
            <ScrollView className='w-full h-full pb-3'>
                <View className='w-full h-[30%] p-5 flex items-center justify-center'>
                    <Image
                        source={require('@/assets/images/check.png')}
                        className='w-[100] h-[100]'
                    />
                    <Text className='text-2xl font-bold text-purple-500'>Thank you for your submission!</Text>
                    <Text className='text-lg font-thin text-center'>Your complaint has been received and will be processed shortly.</Text>

                </View>
                <View className='w-full h-[70%] p-5'>
                    <View className='w-full h-full flex flex-col bg-white border border-gray-500 rounded-lg mb-3'>
                        <View className='w-full p-5 mb-3'>
                            <Text className='text-xl font-bold text-purple-500'>Complaint Details</Text>
                            <View className='w-full p-5'>
                                <View className='w-full flex gap-1 mb-3'>
                                    <Text className='text-lg'>Full Name: {parsedData.fullName}</Text>
                                    <Text className='text-lg'>Contact Number: {parsedData.contactNumber}</Text>
                                    <Text className='text-lg'>Email: {parsedData.email}</Text>
                                </View>
                                <Divider />
                                <View className='w-full flex gap-1 mb-3 mt-3'>
                                    <Text className='text-lg'>Incident Description: {parsedData.incidentDescription}</Text>
                                    <Text className='text-lg'>Type of Feedback: {parsedData.typeOfFeedback}</Text>
                                    <Text className='text-lg'>Bus Number: {parsedData.busNumber}</Text>
                                    <Text className='text-lg'>Route: {parsedData.route}</Text>
                                    <Text className='text-lg'>Driver Name: {parsedData.driverName}</Text>
                                    <Text className='text-lg'>Date of Incident: {parsedData.dateOfIncident}</Text>
                                    <Text className='text-lg'>Time of Incident: {parsedData.timeOfIncident}</Text>
                                    <Text className='text-lg'>Location of Incident: {parsedData.locationOfIncident}</Text>
                                    <Text className='text-lg'>Follow Up Request: {parsedData.followUpRequest}</Text>
                                </View>
                                <TouchableOpacity className='w-full my-5 h-12 bg-purple-500 rounded-full flex items-center justify-center' onPress={() => {router.replace('home' as RelativePathString)}}>
                                        <Text className='text-lg text-white'>Back to Home</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default confirmationScreen
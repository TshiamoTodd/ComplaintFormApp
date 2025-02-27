import { View, Text, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native'
import SegmentedControl from '@react-native-segmented-control/segmented-control'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/Navbar'
import Entypo from '@expo/vector-icons/Entypo'
import Divider from '@/components/Divider'
import DateTimePicker from '@react-native-community/datetimepicker';

const complaintForm = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    

    return (
        <SafeAreaView className='flex-1'>
            <Navbar isForm={true} />
            <View className={isVisible ? 'hidden' : `w-full h-[20%] p-2 bg-purple-400`}>
                <View className='w-full'>
                    <View className='flex items-end m-0'>
                        <TouchableOpacity onPress={() => setIsVisible(true)}>
                        <Entypo name="cross" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View className='w-full p-3'>
                        <Text className='text-lg text-white font-bold'>
                            Having trouble submitting the complaint?
                        </Text>
                        <Text className='text-sm text-white font-light'>
                            Contact support in the event that you cannot submit the complaint form on 
                            support@complaint.com
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View className='w-full p-2'>
                    <Text className='text-3xl font-light mt-2 pl-2'>
                        Complaint Form
                    </Text>

                    <View className='w-full flex gap-2 p-2 mt-3'>
                        <Text className='font-semibold text-lg'>
                            Fullname
                        </Text>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='Jane Doe'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>
                    
                    <View className='w-full flex gap-2 p-2'>
                        <Text className='font-semibold text-lg'>
                            Contact number
                        </Text>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='0123456789'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <Text className='font-semibold text-lg'>
                            Email
                        </Text>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='your-email@mail.com'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Type of feedback
                            </Text>
                            <Text className='text-sm font-thin'>
                                (select one, Reqiured)
                            </Text>
                        </View>
                        <SegmentedControl
                            values={['Complaint', 'Suggestion']}
                            selectedIndex={selectedIndex}
                            onChange={(event) => {
                                setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                            }}
                        />
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <Text className='font-semibold text-lg'>
                            Please describe your concern or suggestion in detail
                        </Text>
                        <Text className='text-sm font-thin'>
                            (Provide as much information as possible)
                        </Text>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            multiline={true}
                            numberOfLines={10}
                            style={{ 
                                height: 100,
                                textAlignVertical: 'top'
                            }}
                        />
                    </View>

                    <View className='w-full flex p-2 mt-5'>
                        <View className='w-full items-center justify-center px-5 mb-5'>
                            <Divider/>
                        </View>
                        <Text className='text-3xl font-light'>
                            Incident Details
                        </Text>
                        <Text className='text-sm font-thin'>
                            If your feedback is about a specific incident, please provide the following details. If not, skip this section
                        </Text>
                    </View>


                    {/* Incident form details */}
                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                            Bus number
                            </Text>
                            <Text className='text-sm font-thin'>
                                (if known) 
                            </Text>
                        </View>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='AN1200'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Route / Shift/ Duty 
                            </Text>
                            <Text className='text-sm font-thin'>
                                (if known)
                            </Text>
                        </View>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='A7'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Driver's name
                            </Text>
                            <Text className='text-sm font-thin'>
                                (if known) 
                            </Text>
                        </View>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='Jane Doe'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    {/* DatePicker */}
                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Date of incident
                            </Text>
                            <Text className='text-sm font-thin'>
                                (if known) 
                            </Text>
                        </View>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='Jane Doe'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    {/* Time Picker */}

                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Location of incident 
                            </Text>
                            <Text className='text-sm font-thin'>
                                (e.g. specific stop, station or area)
                            </Text>
                        </View>
                        <TextInput
                            className='p-2 border border-gray-300 rounded-lg'
                            placeholder='Jane Doe'
                            placeholderTextColor={'lightgray'}
                        />
                    </View>

                    {/* Radio Button */}

                    {/* CheckBox */}

                    <View className='w-full items-center justify-center px-5 mt-5 mb-5'>
                            <Divider/>
                    </View>

                    <View className='w-full flex p-2'>
                        <Text className='text-xl font-light mt-5 pl-2'>
                            Thank you for your feedback
                        </Text>
                        <Text className='text-sm font-light mt-5 pl-2'>
                            We appreciate your input and will review your submission promptly. If a response is required, we will contact you within 5 business days.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default complaintForm
import { View, Text, TouchableOpacity, FlatList, ScrollView, TextInput, Alert } from 'react-native'
import SegmentedControl from '@react-native-segmented-control/segmented-control'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/Navbar'
import Entypo from '@expo/vector-icons/Entypo'
import Divider from '@/components/Divider'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Checkbox from 'expo-checkbox'
import { Controller, useForm } from 'react-hook-form'
import { router } from 'expo-router'

export interface FormData {
    fullName: string;
    contactNumber: string;
    email: string;
    incidentDescription: string;
    typeOfFeedback: string;
    busNumber: string;
    route: string;
    driverName: string;
    dateOfIncident: string;  // String format (YYYY-MM-DD or formatted)
    timeOfIncident: string;  // HH:MM formatted string
    locationOfIncident: string;
    followUpRequest: string;
    finalConfirmation: string;
}

const complaintForm = () => {
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            fullName: '',
            contactNumber: '',
            email: '',
            incidentDescription: '',
            typeOfFeedback: '',
            busNumber: '',
            route: '',
            driverName: '',
            dateOfIncident: '',
            timeOfIncident: '',
            locationOfIncident: '',
            followUpRequest: '',
            finalConfirmation: ''
        }
    });
    
    const [isVisible, setIsVisible] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [date, setDate] = useState(new Date(new Date().toDateString()))
    const [time, setTime] = useState(new Date(new Date().toDateString()))
    const [isChecked, setChecked] = useState(false)

    const onDateChange = (event: any, selectedDate: any) => {
        if (selectedDate) {
            const formattedDate = selectedDate.toDateString(); // Format date
            setValue("dateOfIncident", formattedDate); // Update the form field
        }
    };

    const onTimeChange = (event: any, selectedTime: any) => {
        if (selectedTime) {
            const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // Format time
            setValue("timeOfIncident", formattedTime); // Update the form field
        }
    };

    const showMode = (currentMode: any) => {
        if(currentMode === 'date') {
            DateTimePickerAndroid.open({
              value: date,
              onChange: onDateChange,
              mode: currentMode,
              is24Hour: true,
            });
        } else if(currentMode === 'time') {
            DateTimePickerAndroid.open({
              value: time,
              onChange: onTimeChange,
              mode: currentMode,
              is24Hour: true,
            });
        }
      };
    
    const showDatepicker = () => {
    showMode('date');
    };

    const showTimepicker = () => {
    showMode('time');
    };    

    const onSubmit = (data: FormData) => {
        if(errors.fullName || errors.contactNumber || errors.email || errors.incidentDescription || errors.typeOfFeedback || errors.followUpRequest || errors.finalConfirmation) {
            Alert.alert('Error', 'Please fill in all required fields')
            return
        }
        
        console.log(errors.fullName)

        router.push({
            pathname: '/confirmationScreen',
            params: { data: JSON.stringify(data) }
        })
    };

    const onChange = (arg: any) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    // console.log('errors', errors);

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
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='Jane Doe'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="fullName"
                            rules={{ required: true }}
                        />
                        {errors.fullName && <Text className='text-sm text-red-500'>This is required.</Text>}
                    </View>
                    
                    <View className='w-full flex gap-2 p-2'>
                        <Text className='font-semibold text-lg'>
                            Contact number
                        </Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='0123456789'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="contactNumber"
                            rules={{ required: true }}
                        />
                        {errors.contactNumber && <Text className='text-sm text-red-500'>This is required.</Text>}
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <Text className='font-semibold text-lg'>
                            Email
                        </Text>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='your-email@mail.com'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="email"
                            rules={{ required: true }}
                        />
                        {errors.email && <Text className='text-sm text-red-500'>This is required.</Text>}
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
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <SegmentedControl
                                    values={['Complaint', 'Suggestion']}
                                    selectedIndex={["Complaint", "Suggestion"].indexOf(value)}
                                    onChange={(event) => {
                                        const selectedValue = ["Complaint", "Suggestion"][event.nativeEvent.selectedSegmentIndex];
                                        onChange(selectedValue); // Update form state
                                    }}
                                    onValueChange={value => onChange(value)} // Update form state
                                />
                            )}
                            name="typeOfFeedback"
                            rules={{ required: true }}
                        />
                        {errors.typeOfFeedback && <Text className='text-sm text-red-500'>This is required.</Text>}
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <Text className='font-semibold text-lg'>
                            Please describe your concern or suggestion in detail
                        </Text>
                        <Text className='text-sm font-thin'>
                            (Provide as much information as possible)
                        </Text>

                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    multiline={true}
                                    numberOfLines={10}
                                    style={{ 
                                        height: 100,
                                        textAlignVertical: 'top'
                                    }}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="incidentDescription"
                            rules={{ required: true }}
                        />
                        {errors.incidentDescription && <Text className='text-sm text-red-500'>This is required.</Text>}
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
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='AN1200'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="busNumber"
                            rules={{ required: false }}
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
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='A7'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="route"
                            rules={{ required: false }}
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
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='Jane Doe'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="driverName"
                            rules={{ required: false }}
                        />
                    </View>

                    {/* DatePicker */}
                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full mb-2'>
                            <Text className='font-semibold text-lg'>
                                Date of incident
                            </Text>
                            <Text className='text-sm font-thin'>
                                Please select a date
                            </Text>
                        </View>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <>
                                        <View className='w-full flex flex-row item-center gap-2'>
                                            <TouchableOpacity
                                                onPress={showDatepicker}
                                                className='p-2 border border-gray-300 rounded-lg'
                                            >
                                                <AntDesign name="calendar" size={24} color="black" />
                                            </TouchableOpacity>
                                            <TextInput
                                                className='p-2 border border-gray-300 rounded-lg w-[80%]'
                                                placeholder={date.toDateString()}
                                                placeholderTextColor={'lightgray'}
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                value={value}
                                            />
                                        </View>
                                    </>
                                )}

                                name="dateOfIncident"
                                rules={{ required: false }}
                            />
                    </View>

                    {/* Time Picker */}
                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Time of incident
                            </Text>
                            <Text className='text-sm font-thin'>
                                Please select a time
                            </Text>
                        </View>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <>
                                    <View className='w-full flex flex-row item-center gap-2'>
                                        <TouchableOpacity
                                            onPress={showTimepicker}
                                            className='p-2 border border-gray-300 rounded-lg'
                                        >
                                            <Ionicons name="time-outline" size={24} color="black" />
                                        </TouchableOpacity>
                                        <TextInput
                                            className='p-2 border border-gray-300 rounded-lg w-[80%]'
                                            placeholder={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                                            placeholderTextColor={'lightgray'}
                                            onBlur={onBlur}
                                            onChangeText={value => onChange(value)}
                                            value={value}
                                        />
                                    </View>
                                </>
                            )}
                            name="timeOfIncident"
                            rules={{ required: false }}
                        />
                    </View>

                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Location of incident 
                            </Text>
                            <Text className='text-sm font-thin'>
                                (e.g. specific stop, station or area)
                            </Text>
                        </View>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    className='p-2 border border-gray-300 rounded-lg'
                                    placeholder='Bus stop'
                                    placeholderTextColor={'lightgray'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="locationOfIncident"
                            rules={{ required: false }}
                        />
                    </View>

                    {/* Radio Button */}
                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Follow-up request
                            </Text>
                            <Text className='text-sm font-thin'>
                                Would you like us to follow up with you regarding this feedback?
                            </Text>
                        </View>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <SegmentedControl
                                    className='p-2 my-3'
                                    values={['Yes', 'No']}
                                    selectedIndex={["Yes", "No"].indexOf(value)}
                                    onChange={(event) => {
                                        const selectedValue = ["Complaint", "Suggestion"][event.nativeEvent.selectedSegmentIndex];
                                        onChange(selectedValue); // Update form state
                                    }}
                                    onValueChange={value => onChange(value)}
                                />
                            )}
                            name="followUpRequest"
                            rules={{ required: true }}
                        />
                        {errors.followUpRequest && <Text className='text-sm text-red-500'>This is required.</Text>}
                    </View>

                    {/* CheckBox */}
                    <View className='w-full flex gap-2 p-2'>
                        <View className='w-full'>
                            <Text className='font-semibold text-lg'>
                                Final confirmation
                            </Text>
                            <Text className='text-sm font-thin'>
                                I confirm that the information provided is accurate to the best of my knowledge
                            </Text>
                        </View>
                        <Controller
                        
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View className='w-full flex flex-row item-center gap-2 p-3'>
                                    <Checkbox
                                        className='ml-2'
                                        value={isChecked}
                                        onValueChange={() => {
                                            onChange(!value)
                                            setChecked(!value)}
                                        }
                                        color={isChecked ? '#4630EB' : undefined}
                                    />
                                    <Text>Confirm</Text>
                                </View>
                            )}
                            name="finalConfirmation"
                            rules={{ required: true }}
                        />
                        {errors.finalConfirmation && <Text className='text-sm text-red-500'>This is required.</Text>}
                    </View>
                    
                    <View className='w-full flex gap-2 p-2'>
                        <TouchableOpacity 
                            onPress={handleSubmit(onSubmit)}
                            className='w-full bg-purple-500 py-4 px-4 rounded-xl items-center'
                        >
                            <Text className='text-white font-normal text-lg'>Submit</Text>
                        </TouchableOpacity>
                    </View>

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
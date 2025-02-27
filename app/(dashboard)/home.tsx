import { View, Text, Image } from 'react-native'
import React from 'react'
import Navbar from '@/components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Navbar isForm={false}/>
        <View className="relative w-full h-[250px]">
            <Image
              source={require('@/assets/images/hero.jpg')}
              className="z-0 w-full h-[250px]"
                resizeMode="cover"
            />
            <Text className="text-2xl font-bold text-white font-JakartaSemiBold absolute bottom-8 left-5">
              Welcome 👋
            </Text>
            <Text className="text-sm font-thin text-white font-JakartaSemiBold absolute bottom-4 left-5">
              Live a complaint free life.
            </Text>
        </View>
        <View>
            <Text className="text-5xl text-purple-500 font-bold mt-5 ml-5">Complaint</Text>
            <Text className="text-5xl font-bold ml-5">Management</Text>
            <Text className="text-5xl font-bold ml-5">System.</Text>
            <Text className='mt-3 text-sm font-thin ml-5 mr-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages.
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
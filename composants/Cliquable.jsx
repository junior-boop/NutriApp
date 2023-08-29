import { FontAwesome5 } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, View, Image } from 'react-native'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler'

export function SimpleCliquable({titre, hasIcones, label, children, href = "/"}){
    return(
        <View className = "w-full rounded-xl overflow-hidden bg-[#F4FBFF] border border-teal-100 mb-2">
            <TouchableNativeFeedback>
                <View className = "flex-row gap-4 p-4 items-center justify-between">
                    <Link href = {href}>
                        <View className = "flex-row  items-center ">
                            { hasIcones && <View className = "w-9 h-9 rounded-full bg-teal-500"></View>}
                            <Text className = {`text-xl font-bold text-teal-900 ${hasIcones ? 'pl-4' : ''}`}>
                                {titre}
                            </Text>
                        </View>
                        {
                            label && (<View className = "px-5 py-1 bg-[#FCD484] rounded-3xl mt-1">
                                            <Text className = "font-light text-lg text-[#7B5100]">{label}</Text>
                                        </View>)
                        }
                    </Link>
                    <View>
                        <FontAwesome5 name="angle-right" size={24} color = "rgb(19 78 74)"/>
                    </View>
                </View>
                {children && (
                    <View className = "px-4 pb-4">
                    {children}
                </View>
                )}
            </TouchableNativeFeedback>
        </View>
    )
}

export function Activite_1(){
    return(
        <View className = "w-[90%]">
            <TouchableOpacity className = "flex-row">
                <View className = "w-20 h-20 bg-[#6ECBFF] rounded-xl flex items-center justify-center mb-4">
                    <Image
                        source = {require('../assets/fonctionnement_2.png')}
                        className = "w-14 h-14"
                    />
                </View>
                <View className = "w-[85%] pl-4">
                    <Text className = "text-lg w-[80%]  font-bold h-auto">Liste des activités sportives à effectuer chaque matin </Text>
                    <View className = "py-1 px-4 bg-slate-200 w-[100px] items-center rounded-xl mt-2">
                        <Text className = "font-light">03 activités</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export function Activite_2(){
    return(
        <View className = "w-[90%]">
            <TouchableOpacity className = "flex-row">
                <View className = "w-20 h-20 bg-[#FFAEAE] rounded-xl flex items-center justify-center mb-4">
                    <Image
                        source = {require('../assets/repas.png')}
                        className = "w-14 h-14"
                    />
                </View>
                <View className = "w-[85%] pl-4">
                    <Text className = "text-lg w-[80%]  font-bold h-auto">Petit déjeuner possibles suivant vos informations</Text>
                    <View className = "py-1 px-4 bg-slate-200 w-[100px] items-center rounded-xl mt-2">
                        <Text className = "font-light">03 activités</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}



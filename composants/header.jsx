import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Link } from 'expo-router';


export  function Header_Principal() {
  return (
        <View className = "h-16  flex items-center px-4 flex-row justify-between">
            <View>
                <Text className = "text-2xl font-semibold text-slate-800">NutriApp</Text>
            </View>
            <View className = "w-12 h-12 rounded-full  flex justify-center items-center overflow-hidden">
                <Link href = "/profils">
                <TouchableNativeFeedback className = "w-12 h-12 rounded-full flex justify-center items-center">
                    <FontAwesome5 name="user-circle" size={24} className = "text-slate-800" />
                </TouchableNativeFeedback>
                </Link>
            </View>
        </View>
  );
}


export function HeaderArticle({titre, calorie, lipide, proteine, ages}){
    return(
        <View className = "px-4 justify-center">
            <View className = "flex-row  h-[92px] justify-between items-center mb-7">
                <View>
                    <Ionicons name = "ios-heart-outline" size = {32} color = "#424242" />
                </View>
                <View>
                    <Text className = "text-base text-center">Recette</Text>
                    <Text className = "text-4xl font-bold text-center">
                        {titre}
                    </Text>
                </View>
                <View>
                    <Ionicons name = "share-outline" size={32} color = '#424242' />
                </View>
            </View>
            <View className = "border border-slate-200 p-3 flex-row">
                <View className = 'flex-1 '>
                    <Text className = 'font-bold'>Total nutritionnel</Text>
                    <Text>Calories : {calorie} Kcal</Text>
                    <Text>Lipides : {lipide} g</Text>
                    <Text>Proteines : {proteine} g</Text>
                    <Text>Ages : {ages} ans</Text>
                </View>
                <View className = "flex-1 items-center justify-center">
                    <View className = "w-[103px] h-[100px] rounded-xl items-center justify-center bg-[#B6FFCB]">
                        <Text className = 'mb-[-10px] text-[#004A15]'>Votre IMC </Text>
                        <Text style = {{letterSpacing : -5}} className = 'text-[48px] font-black text-[#004A15]'>18.7</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
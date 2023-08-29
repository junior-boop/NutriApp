
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';


export  function Item_Grand({titre, data}) {
    
  return (
        <View className = "w-full h-[300px] bg-white rounded-2xl border border-slate-100 overflow-hidden mb-2">
            <TouchableNativeFeedback className = "w-full h-[300px]" >
                <Image
                    source = {{uri : data.image}}
                    className = "h-[70%] w-full "
                />
                <View className = " flex-1 px-4 py-2">
                    <Text className = "text-2xl font-bold">
                         {data.titre}
                    </Text>
                    <Text className = "text-base text-slate-500">
                        Présentation du plat - Préparation
                    </Text>
                    <Text className = "text-sm text-slate-400">
                    Ingrédients
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
  );
}


export function Item_Petit({data}){
    return(
        <View className = "w-full h-[120px] bg-white rounded-2xl border border-slate-100 overflow-hidden mb-2">
            <TouchableNativeFeedback className = "w-full h-[120px] flex-row">
                <Image
                    source = {{uri : data.image}}
                    className = "w-[120px] aspect-square"
                />
                <View className = " flex-1 px-4 py-3 justify-between">
                    <View>
                        <Text className = "text-2xl font-bold">
                            {data.titre} - Food
                        </Text>
                        <Text className = "text-base text-slate-500">
                            Présentation du plat - Préparation
                        </Text>
                    </View>
                    <Text className = "text-sm text-slate-400">
                        Publié le {data.createAt}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export function Regime(){
    return(
        <View className = "w-full h-[170px] bg-[#F6C462] rounded-2xl border border-[#F6C462] overflow-hidden mb-2">
            <TouchableNativeFeedback className = "w-full h-[170px] flex-row relative">
                <Image
                    source = {require('../assets/regime.png')}
                    className = "h-[170px] w-[170px] absolute right-[-15%] top-[20px] z-0 scale-125"
                />
                <View className = " px-4 py-4 justify-between absolute z-[2] h-full">
                    <View>
                        <Text className = "text-base text-slate-800 w-[80%] ">
                        Définir votre
                        </Text>
                        <Text className = "text-3xl font-black w-[80%] h-[70]">
                            Régime Alimentaire
                        </Text>
                    </View>
                    <View>
                        <FontAwesome5 name="angle-right" size={25} className = "text-[#0C2E00]" />
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderArticle, Header_Principal } from '../composants/header';
import { FontAwesome5 } from '@expo/vector-icons';
import { Titre } from '../composants/titre';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Item_Grand, Item_Petit, Regime } from '../composants/items';
import { Activite, Activite_1, Activite_2, SimpleCliquable } from '../composants/Cliquable';
import { Link } from 'expo-router';
import data from '../Database/nourriture.json'

export default function App() {
  return (
    <SafeAreaView className = "flex-1 bg-[#FAFAFA]">
        <StatusBar style='dark' />
        <Header_Principal />
        <ScrollView className = "flex-1 pt-4">
            <View className = "flex-row px-4 gap-3 mb-4">
                <View className  = "h-[200px] aspect-square bg-[#ABFF8E] rounded-xl overflow-hidden">
                    <Link href = '/imc'>
                        <TouchableNativeFeedback className = "h-[200px] aspect-square justify-between p-5">
                            <View >
                                <Text className = "text-4xl font-extrabold text-[#0C2E00]">Calculer votre IMC</Text>
                            </View>
                            <View className = "items-end">
                                <FontAwesome5 name="angle-right" size={25} className = "text-[#0C2E00]" />
                            </View>
                        </TouchableNativeFeedback>
                    </Link>
                </View>
                <Link href = '/objectifs' className = "border flex-1 bg-slate-300">
                    <View className = "w-full h-full rounded-xl overflow-hidden justify-end border">
                        <TouchableNativeFeedback className = "w-full h-full bg-slate-400 rounded-xl overflow-hidden relative justify-end border">
                            <Image
                                source = {require('../assets/objectif.png')}
                                // style = {{
                                //     resize : 'cover'
                                // }}
                                className = "w-[100%] h-full absolute top-0 left-0 z-0" 
                            />
                            <Image 
                                source = {require('../assets/gradient.png')}
                                className = "w-full absolute top-0 left-0 z-[2]"
                            />

                            <View className = "p-4 absolute top-0 left-0 z-[4]">
                                <Text className = "text-2xl font-extrabold text-white">Votre Objectif</Text>
                            </View>
                            <View className = "items-end m-4">
                                    <FontAwesome5 name="angle-right" size={25} color = "white" />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </Link>
            </View>
            <Titre titre={'Quelques recettes'} />
            <View className = "px-4">
                    <Item_Grand data = {data[0]}  />
                    <Item_Petit data = {data[1]}/>
                    <Item_Petit data = {data[2]}/>
                    <Regime />
                    {/* <SimpleCliquable titre={'Gagner du poids'} hasIcones />
                    <SimpleCliquable titre={'Planning Quotidien'}>
                        <Text className = "text-base font-semibold text-slate-600">- Petit déjeuner</Text>
                        <Text className = "text-base font-semibold text-slate-600">- Déjeuner</Text>
                        <Text className = "text-base font-semibold text-slate-600">- Diner</Text>
                        <Text className = "text-base font-semibold text-slate-600">- Grignotage</Text>
                    </SimpleCliquable>
                    <SimpleCliquable titre={'Planning Hebdomadaire'} label = "Recommander pour vous" />
                    <View className = "flex items-center">
                        <Activite_1/>
                        <Activite_2/>
                    </View> */}

            </View>
            <HeaderArticle titre={'Eru - Food'} />
            <View className = "h-[100px]" />
        </ScrollView>
    </SafeAreaView>
  );
}

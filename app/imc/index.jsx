import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Titre } from '../../composants/titre';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

export default function Profils() {
  return (
    <KeyboardAvoidingView className = "flex-1 bg-white">
      <Stack.Screen
          options = {{
            title : 'IMC',
            headerStyle : {
              elevation : 0
            }
          }}
      />
      <StatusBar style="auto" />
      <ScrollView>
        <View className = "p-4">
            <Text className = "text-4xl font-black">IMC</Text>
            <View className = "mt-4 p-3 rounded-lg bg-slate-100">
                <Text className = "text-base">L’indice de masse corporelle (IMC) permet d’évaluer rapidement votre corpulence simplement avec votre poids et votre taille, quel que soit votre sexe. Calculez rapidement votre IMC et découvrez dans quelle catégorie vous vous situez.</Text>
            </View>
        </View>
            <Titre titre={'Calculer votre IMC'} />
            <View className = "px-4 h-36 ">
                <Text className = "text-base mb-1">Votre Masse</Text>
                <TextInput phaceholder = "Votre Masse" className = "h-12 flex-1 border border-slate-200 rounded-md px-3 text-xl mb-2" keyboardType = 'numeric' />
                <Text className = "text-base mb-1">Votre Taille</Text>
                <TextInput phaceholder = "ville" className = "h-12 flex-1 border border-slate-200 rounded-md px-3 text-xl mb-2" keyboardType = 'numeric' />
            </View>
            <View>
            <View className = "px-4 h-12 mt-3 flex-row gap-x-2">
                    <View className = "h-10 flex-1 rounded-3xl overflow-hidden">
                        <TouchableOpacity className = "h-full w-full items-center justify-center bg-[#34FC6C]">
                            <Text className = "text-base  font-bold text-green-900">Lancer le calcule</Text>
                        </TouchableOpacity>
                    </View>
                    <View className = "h-10 w-[100px]  rounded-3xl items-center bg-red-200">
                        <TouchableOpacity className = "h-full w-full items-center justify-center ">
                            <Text className = "text-base  font-bold text-red-900">Nettoyer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View className = "px-4 mt-14">
                <View className = "border border-slate-200 aspect-square rounded-lg items-center justify-center">
                    <View className = "w-[150px] h-[150px] bg-[#B6FFCB] items-center justify-center rounded-2xl">
                        <Text className = "text-[82px] font-extrabold text-[#326841] ">0</Text>
                    </View>
                </View>
            </View>
            <View className = "h-[100px]" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


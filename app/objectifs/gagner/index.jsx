import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Regime } from '../../../composants/items';
import { Titre } from '../../../composants/titre';


export default function Profils() {
  return (
    <ScrollView className = "flex-1 bg-white">
      <Stack.Screen
          options = {{
            title : '',
            headerStyle : {
              elevation : 0
            }
          }}
      />
      <StatusBar style="auto" />
      <View className = "p-4">
          <Text className = "text-base font-semibold text-slate-500">
            Objectif
          </Text>
          <Text className = "text-2xl font-bold text-slate-800">
            Gagner du Poids
          </Text>
          <View className = "p-3 bg-[#F4FBFF] mt-5 rounded-lg">
            <Text className = "text-lg font-bold">Informations utilisateur</Text>
            <Text className = "text-base">Taille : 179 cm</Text>
            <Text className = "text-base">Poids : 60 Kg</Text>
            <Text className = "text-base">IMC : 18.7</Text>
            <Text className = "text-base">Age : 30 ans</Text>
            <View className = "p-3 rounded-lg bg-[#BFE8FF] mt-4">
                <Text className = "text-base">
                    C’est-à-dire que vous n’êtes ni en surpoids, ni en maigreur. Une alimentation équilibrée, un mode de vie sain et de l’exercice contribuent à une bonne santé physique et psychique.
                </Text>
            </View>
        </View>

        <View className = "my-8" >
          <Text className = "text-xl font-bold mb-4">Recommandations</Text>
          <Text className = "text-base"> Un IMC inférieur à 18 ou supérieur à 30 doit vous pousser à consulter un médecin afin de faire le point sur votre état de santé. Si vous ressentez un retentissement physique ou psychologique de votre IMC quel que soit son chiffre, nous vous invitons également à consulter un médecin. Que vous soyez trop maigre ou en surcharge pondérale, un nutritionniste peut également vous accompagner afin de changer vos habitudes alimentaires.</Text>
        </View>
        <Regime />

      </View>
      <Titre titre={'Quelques recettes'} />
      <View className = "px-4">

      </View>
      
    </ScrollView>
  );
}

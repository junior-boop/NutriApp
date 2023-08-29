import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { SimpleCliquable } from '../../composants/Cliquable';

export default function Profils() {
  return (
    <View className = "flex-1 bg-white">
      <Stack.Screen
          options = {{
            title : 'Votre Objectif',
            headerStyle : {
              elevation : 0
            }
          }}
      />
      <View className = "p-4">
      <SimpleCliquable titre={'Gagner du poids'} hasIcones href='/objectifs/gagner'/>
      <SimpleCliquable titre={'Maintenir la ligne'} hasIcones />
      <SimpleCliquable titre={'Perdre du poids'} hasIcones />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


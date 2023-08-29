import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export  function Titre({titre}) {
  return (
        <View className = "px-4 py-2">
            <Text className = "text-lg font-bold text-slate-500">
                {titre}
            </Text>
        </View>
  );
}

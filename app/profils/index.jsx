import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default function Profils() {
  return (
    <View className = "flex-1 bg-white">
      <Stack.Screen
          options = {{
            title : 'Profils',
            headerStyle : {
              elevation : 0
            }
          }}
      />
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}


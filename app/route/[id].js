import { useLocalSearchParams } from 'expo-router/';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';


export default function routeId() {
    const { id } = useLocalSearchParams()
  return (
        <ScrollView>

            <View>
                <Text>ville : {id} </Text>
            </View>
        </ScrollView>
  );
}

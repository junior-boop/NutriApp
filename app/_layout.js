import { Stack } from 'expo-router/stack';
import GlobalContextProvider from '../context/globalcontext';



export default function Layout() {
  return (
    <GlobalContextProvider>
          <Stack 
            screenOptions={{
              headerShown : false
            }}
            />
    </GlobalContextProvider>
  )
}
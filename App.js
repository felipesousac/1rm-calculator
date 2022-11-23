import { View, Text, StatusBar } from 'react-native'
import { Body } from './src/components/Body'
import { Header } from './src/components/Header'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Body />
    </>
  )
}

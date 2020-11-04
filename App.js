import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/page/home'
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>      
      <View style={styles.container}>
         <HomeScreen />
      </View>
  </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

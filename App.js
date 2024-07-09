import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import Navigator from './src/Navigation';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

export default function App() {
  return (
    <View style={styles.container}>
       <Navigator />
   
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    
  },
});

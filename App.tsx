import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { usePushNotifications } from './usePushNotifications';

export default function App() {
  const { expoPushToken, notification } = usePushNotifications();
  
  const data = JSON.stringify(notification, undefined, 2);

  console.log(expoPushToken?.data)

  return (
    <View style={styles.container}>
      <Text>Token: {expoPushToken?.data ?? ""}</Text>
      <Text>{data}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

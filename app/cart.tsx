import { Text, View } from 'react-native';

export default function Cart() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your cart is empty.</Text>
    </View>
  );
}
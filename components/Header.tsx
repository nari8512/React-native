import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title?: string;
};

export default function Header({ title = 'Jeans' }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Menu button */}
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Ionicons name="menu" size={26} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Right Icons */}
      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={22} style={{ marginRight: 12 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  headerTitle: { fontSize: 18, fontWeight: '800' },
  icons: { flexDirection: 'row', alignItems: 'center' },
});

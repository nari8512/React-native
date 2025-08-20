import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput, TouchableOpacity,
  View
} from 'react-native';
import { products } from '../../app/data/products';
import colors from '../../app/theme/colors';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Clothing" />

      {/* Hero */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1600&auto=format&fit=crop' }}
        style={styles.hero}
        imageStyle={{ opacity: 0.9 }}
      >
        <Text style={styles.heroTitle}>New arrivals</Text>
        <Text style={styles.heroSubtitle}>COLLECTION 2016</Text>
        <TouchableOpacity style={styles.shopBtn}>
          <Text style={styles.shopBtnText}>SHOP NOW</Text>
        </TouchableOpacity>
      </ImageBackground>

      {/* Product grid */}
      <Text style={styles.count}>{products.length} items</Text>
      <View style={styles.grid}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ gap: 16 }}
          contentContainerStyle={{ paddingBottom: 8 }}
          scrollEnabled={false}
        />
      </View>

      {/* Subscribe */}
      <View style={styles.subscribe}>
        <Text style={styles.subTitle}>Subscribe</Text>
        <Text style={styles.subDesc}>To get special offers and VIP treatment:</Text>
        <TextInput placeholder="Enter e-mail" style={styles.input} keyboardType="email-address" />
        <TouchableOpacity style={styles.subBtn}>
          <Text style={styles.subBtnText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerCol}>
          <Text style={styles.footerTitle}>Contact</Text>
          <Text style={styles.footerText}>Questions? Go ahead.</Text>
          <TextInput placeholder="Name" style={styles.footerInput} />
          <TextInput placeholder="Email" style={styles.footerInput} keyboardType="email-address" />
          <TextInput placeholder="Subject" style={styles.footerInput} />
          <TextInput placeholder="Message" style={[styles.footerInput, { height: 80 }]} multiline />
          <TouchableOpacity style={styles.footerBtn}>
            <Text style={styles.footerBtnText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerCol}>
          <Text style={styles.footerTitle}>About</Text>
          {[
            'About us','We’re hiring','Support','Find store',
            'Shipment','Payment','Gift card','Return','Help',
          ].map((t) => (
            <Text key={t} style={styles.link}>{t}</Text>
          ))}
        </View>

        <View style={styles.footerCol}>
          <Text style={styles.footerTitle}>Store</Text>
          <Text style={styles.footerText}>📍 42 Fashion Ave, NY</Text>
          <Text style={styles.footerText}>📞 +01 234 567 88</Text>
          <Text style={styles.footerText}>✉️ hello@store.com</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 8 }}>
            <Text>👍</Text><Text>📷</Text><Text>🐦</Text><Text>💼</Text>
          </View>
        </View>
      </View>

      <Text style={styles.copy}>Powered by React Native + Expo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },

  hero: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  heroTitle: { color: colors.white, fontSize: 32, fontWeight: '900', letterSpacing: 1 },
  heroSubtitle: { color: colors.white, fontSize: 18, marginTop: 4 },
  shopBtn: { backgroundColor: colors.primary, paddingHorizontal: 18, paddingVertical: 10, borderRadius: 10, marginTop: 16 },
  shopBtnText: { color: colors.white, fontWeight: '700' },

  count: { marginHorizontal: 16, marginBottom: 8, color: colors.gray },
  grid: { paddingHorizontal: 16 },

  subscribe: { backgroundColor: colors.dark, margin: 16, padding: 16, borderRadius: 16 },
  subTitle: { color: colors.white, fontSize: 22, fontWeight: '900' },
  subDesc: { color: colors.white, marginTop: 6 },
  input: { backgroundColor: colors.white, marginTop: 12, borderRadius: 10, paddingHorizontal: 12, height: 44 },
  subBtn: { marginTop: 12, backgroundColor: colors.accent, paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  subBtnText: { color: colors.white, fontWeight: '800' },

  footer: { flexDirection: 'column', gap: 16, paddingHorizontal: 16, marginBottom: 24, marginTop: 8 },
  footerCol: { backgroundColor: colors.light, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: colors.border },
  footerTitle: { fontWeight: '900', fontSize: 16, marginBottom: 8, color: colors.text },
  footerText: { color: colors.text, marginBottom: 6 },
  footerInput: {
    backgroundColor: colors.white, borderRadius: 10, paddingHorizontal: 12,
    height: 44, marginBottom: 8, borderWidth: 1, borderColor: colors.border,
  },
  footerBtn: { backgroundColor: colors.primary, paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 4 },
  footerBtnText: { color: colors.white, fontWeight: '800' },
  link: { color: colors.gray, marginBottom: 6 },

  copy: { textAlign: 'center', color: colors.gray, marginBottom: 24, marginTop: -8 },
});
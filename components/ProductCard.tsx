import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Product } from '../app/data/products';
import colors from '../app/theme/colors';

type Props = { item: Product };

export default function ProductCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      {item.tag ? (
        <View style={[styles.badge, item.tag === 'Sale' && styles.sale]}>
          <Text style={styles.badgeText}>{item.tag}</Text>
        </View>
      ) : null}

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => Alert.alert('Buy', `Buying: ${item.title}`)}
        >
          <Text style={styles.ctaText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
    flex: 1,
  },
  image: { width: '100%', height: 180 },
  body: { padding: 12 },
  title: { fontSize: 14, fontWeight: '600', marginBottom: 4 },
  price: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  cta: {
    backgroundColor: colors.dark,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  ctaText: { color: colors.white, fontWeight: '700' },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.dark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  sale: { backgroundColor: colors.accent },
  badgeText: { color: colors.white, fontSize: 12, fontWeight: '800' },
});
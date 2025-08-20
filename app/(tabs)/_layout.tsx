import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { products } from "../data/products";

function toRouteName(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase();
}

export default function RootLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false, drawerActiveTintColor: "black" }}>
      {/* Home */}
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }: any) => (
            <Ionicons name="home" size={size ?? 22} color={color ?? "gray"} />
          ),
        }}
      />

      {/* All products use same screen (product/[id].tsx) */}
      {products.map((item) => (
        <Drawer.Screen
          key={item.id}
          name={`product/${toRouteName(item.title)}`}
          options={{
            drawerLabel: item.title,
            drawerIcon: ({ color, size }: any) => (
              <Ionicons name="shirt" size={size ?? 22} color={color ?? "gray"} />
            ),
          }}
        />
      ))}
    </Drawer>
  );
}

import { foodsData } from "@/data";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const groupedByCategory = foodsData.reduce<Record<string, typeof foodsData>>(
  (acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  },
  {},
);

const categoryList = Object.entries(groupedByCategory);

export default function Menu() {
  const router = useRouter();

  return (
    <ScrollView className="bg-[#fcf9f7] p-5">
      <View className="mb-6">
        <Text className="text-4xl mb-2 font-bold text-[#260f08]">Menu</Text>
        <Text className="text-sm text-[#6f6e6e]">
          Explore your favorite dishes by category and find the perfect meal for
          your next order.
        </Text>
      </View>

      <View className="space-y-5">
        {categoryList.map(([category, items]) => (
          <View
            key={category}
            className="rounded-3xl bg-white p-4 shadow-sm shadow-[#d9c9c0]/30"
          >
            <Text className="text-2xl font-bold text-[#260f08] mb-1">
              {category}
            </Text>
            <Text className="text-sm text-[#6f6e6e] mb-4">
              {items.length} {items.length === 1 ? "dish" : "dishes"}
            </Text>
            <View className="rounded-2xl overflow-hidden bg-[#f8f3ef]">
              <Image
                source={items[0].image.mobile}
                alt={category}
                className="h-44 w-full"
                style={{ objectFit: "cover" }}
              />
            </View>

            <View className="mt-4 space-y-3">
              {items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => router.push(`/menu/${item.id}`)}
                  className="rounded-2xl bg-[#fcf9f7] px-4 py-3"
                >
                  <View className="flex-row items-center justify-between">
                    <Text className="text-base font-semibold text-[#260f08]">
                      {item.name}
                    </Text>
                    <Text className="text-sm text-[#c73a0f] font-bold">
                      N{item.price.toLocaleString()}
                    </Text>
                  </View>
                  <Text className="text-xs text-[#6f6e6e] mt-1">
                    Tap for details and ordering
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

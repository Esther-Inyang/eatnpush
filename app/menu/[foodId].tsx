import { useCart } from "@/app/cart-context";
import { foodsData } from "@/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

function BackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="px-3"
      accessibilityLabel="Go back"
    >
      <Text className="text-[#c73a0f] font-bold">Back</Text>
    </TouchableOpacity>
  );
}

export const options = {
  // hide the native header so we can render a custom one (prevents web from showing the route path)
  headerShown: false,
};

export default function FoodDetail() {
  const router = useRouter();
  const { foodId } = useLocalSearchParams<{ foodId: string }>();
  const food = foodsData.find((item) => item.id === Number(foodId));
  const { addToCart } = useCart();

  function Header() {
    return (
      <View className="flex-row items-center justify-start px-4 py-3 bg-transparent">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 p-2"
          accessibilityLabel="Go back"
        >
          <Text className="text-2xl text-[#c73a0f]">‹</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!food) {
    return (
      <ScrollView className="bg-[#fcf9f7] p-5">
        <Header />
        <View className="rounded-3xl bg-white p-6 items-center">
          <Text className="text-2xl font-bold text-[#260f08] mb-2">
            Item not found
          </Text>
          <Text className="text-sm text-[#6f6e6e] text-center mb-4">
            The selected food item could not be found. Please return to the menu
            and try again.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/menu")}
            className="rounded-full bg-[#c73a0f] px-6 py-3"
          >
            <Text className="text-white font-bold text-center">
              Back to Menu
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  const handleAddToCart = () => {
    addToCart(food);
    router.push("/");
  };

  return (
    <ScrollView className="bg-[#fcf9f7] p-5">
      <Header />
      <Text className="text-sm uppercase tracking-[0.3em] mb-2 text-[#c73a0f] font-bold">
        Dish Details
      </Text>
      <Text className="text-4xl mb-2 font-bold text-[#260f08]">
        {food.name}
      </Text>
      <Text className="text-sm text-[#6f6e6e] mb-5">
        View full details and place your order from this page.
      </Text>

      <View className="rounded-3xl overflow-hidden bg-white shadow-sm shadow-[#d9c9c0]/30 mb-5">
        <Image
          source={food.image.mobile}
          alt={food.name}
          style={{ width: "100%", height: 288, objectFit: "cover" }}
        />
      </View>

      <View className="rounded-3xl bg-white p-5 shadow-sm shadow-[#d9c9c0]/30">
        <Text className="text-base font-semibold text-[#260f08] mb-2">
          Category
        </Text>
        <Text className="text-sm text-[#6f6e6e] mb-5">{food.category}</Text>

        <Text className="text-base font-semibold text-[#260f08] mb-2">
          Price
        </Text>
        <Text className="text-xl font-bold text-[#c73a0f] mb-5">
          N{food.price.toLocaleString()}
        </Text>

        <Text className="text-base font-semibold text-[#260f08] mb-2">
          Description
        </Text>
        <Text className="text-sm text-[#6f6e6e] mb-6">
          A delicious {food.category.toLowerCase()} cooked to order. Add it to
          your cart and checkout when you're ready.
        </Text>

        <TouchableOpacity
          onPress={handleAddToCart}
          className="rounded-full bg-[#c73a0f] px-6 py-3 mb-3"
        >
          <Text className="text-white font-bold text-center">Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/menu")}
          className="rounded-full border border-[#c73a0f] px-6 py-3"
        >
          <Text className="text-[#c73a0f] font-bold text-center">
            Back to Menu
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

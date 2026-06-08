import { foodsData } from "@/data";
import { Caveat_400Regular, useFonts } from "@expo-google-fonts/caveat";
import {
  LobsterTwo_400Regular,
  LobsterTwo_700Bold,
} from "@expo-google-fonts/lobster-two";
import { useRouter } from "expo-router";
import {
  CircleCheck,
  Minus,
  Plus,
  ShoppingCart,
  XCircle,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useCart } from "../cart-context";

export default function Home() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useCart();

  const [fontsLoaded, fontError] = useFonts({
    Caveat_400Regular,
    LobsterTwo_400Regular,
    LobsterTwo_700Bold,
  });
  const router = useRouter();

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setShowSplash(false);
    }
  }, [fontsLoaded, fontError]);

  const formatPrice = (amount: number) =>
    `N${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const handleAddToCart = (food: (typeof foodsData)[number]) => {
    addToCart(food);
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const openConfirmModal = () => {
    if (cartItems.length === 0) {
      return;
    }
    setIsConfirmModalOpen(true);
    setIsCartModalOpen(false);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handlePlaceOrder = () => {
    closeCartModal();
    router.push("/");
  };

  if (showSplash) {
    return (
      <View className="flex-1 items-center justify-center bg-[#fcf9f7]">
        <View className="w-[85%] bg-white rounded-3xl p-6 items-center shadow-lg shadow-[#f1e7e0]">
          <View className="w-20 h-20 rounded-full bg-[#fde6dd] items-center justify-center mb-4">
            <Text
              className="text-2xl"
              style={{ color: "#c73a0f", fontWeight: "700" }}
            >
              🍽
            </Text>
          </View>
          <Text className="text-3xl font-bold text-[#c73a0f] font-LobsterTwo_700Bold">
            Meal 4 Devs
          </Text>
          <Text className="text-sm mt-2 text-center text-[#6f6e6e] font-LobsterTwo_700Bold">
            Delicious and nutritious meals for Nerdy Developers
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="bg-[#fcf9f7] p-5">
      <View className="w-full rounded-xl flex items-center justify-center mb-7">
        <View>
          <View className="w-full p-3">
            <View className="flex flex-row items-center justify-between mb-6">
              <View className="flex-row items-center space-x-3">
                <View className="flex-row items-center space-x-2">
                  <View className="w-8 h-8 rounded-full bg-[#fde6dd] items-center justify-center">
                    <Text
                      className="text-base"
                      style={{ color: "#c73a0f", fontWeight: "700" }}
                    >
                      🍽
                    </Text>
                  </View>
                  <Text className="text-xs font-bold text-[#260f08] font-LobsterTwo_700Bold">
                    {"Eat 'n' Push"}
                  </Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => setIsCartModalOpen(true)}>
                <View className="relative w-8 h-8 pr-2 items-center justify-center">
                  <ShoppingCart color="#c73a0f" size={24} />
                  <View
                    className="absolute bg-[#c73a0f] rounded-full items-center justify-center border-2 border-white"
                    style={{
                      top: -4,
                      right: -4,
                      minWidth: 18,
                      height: 18,
                      paddingHorizontal: 4,
                    }}
                  >
                    <Text
                      className="text-white font-bold"
                      style={{ fontSize: 10, lineHeight: 14 }}
                    >
                      {cartCount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="w-full flex flex-row justify-center mb-6 px-3">
            <Text className="text-2xl mb-1 font-bold text-[#260f08] font-LobsterTwo_700Bold">
              Meal 4 Devs
            </Text>
          </View>

          <View className="flex flex-col gap-4 bg-white p-3">
            {foodsData.map((food) => {
              const { id, image, name, category, price } = food;
              return (
                <View key={id}>
                  <View className="p-5 bg-gray-50 rounded-md">
                    <View className="w-[300px] h-[200px] rounded-xl bg-white shadow-lg shadow-[#f4edeb]">
                      <Image
                        source={image.mobile}
                        alt="food"
                        // resizeMode="cover"
                        className="rounded-xl"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </View>
                    <View className="w-full flex flex-row justify-center">
                      <TouchableOpacity
                        onPress={() => handleAddToCart(food)}
                        className="-mt-3 px-6 py-3 flex flex-row items-center justify-center gap-1 text-sm rounded-full border border-[#c9aea6] bg-[#fcf9f7] font-bold cursor-pointer"
                      >
                        <View>
                          <ShoppingCart color="#c73a0f" size={16} />
                        </View>
                        <Text className="text-[#260f08]">Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                    <View className="p-3 mt-1 rounded-md">
                      <Text className="text-[#260f08] text-sm font-bold">
                        {name}
                      </Text>
                      <Text className="text-[#c73a0f] text-sm font-bold">
                        {formatPrice(price)}
                      </Text>
                      <Text className="text-[#ad8985] text-sm">{category}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Cart Modal*/}
        <Modal
          visible={isCartModalOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={closeCartModal}
        >
          <TouchableWithoutFeedback onPress={closeCartModal}>
            <View className="w-full h-full flex flex-col justify-center items-center z-50 bg-black/50">
              <View className="w-[90%] p-5 bg-white rounded-md">
                <Text className="text-[#c73a0f] text-2xl font-extrabold">
                  Your Cart ({cartCount})
                </Text>

                <View className="mt-2">
                  {cartItems.length === 0 ? (
                    <View className="py-12 flex flex-col gap-5 items-center">
                      <Text className="text-xl text-[#87635a] text-center font-bold">
                        Your cart is empty!
                      </Text>
                      <Text className="text-sm text-[#87635a] text-center">
                        Select your favourite food and get it delivered to your
                        doorstep in no time!
                      </Text>
                    </View>
                  ) : (
                    <View className="space-y-4">
                      {cartItems.map(({ food, quantity }) => {
                        const itemTotal = food.price * quantity;
                        return (
                          <View
                            key={food.id}
                            className="flex-row items-start border-b border-b-black/10 pb-4"
                          >
                            <View className="flex-1 pr-3">
                              <Text className="text-base font-bold text-[#260f08]">
                                {food.name}
                              </Text>
                              <View className="flex-row justify-between items-center mb-2 mt-2">
                                <View>
                                  <View className="flex-row gap-3 py-1 items-center">
                                    <Text className="text-[#c73a0f] text-sm font-medium">
                                      {quantity}x
                                    </Text>
                                    <View className="flex-row gap-1">
                                      <Text className="text-[#ad8985] text-sm font-medium">
                                        @
                                      </Text>
                                      <Text className="text-[#ad8985] text-sm font-medium">
                                        {formatPrice(food.price)}
                                      </Text>
                                    </View>
                                    <Text className="text-[#ad8985] text-sm font-medium">
                                      {formatPrice(itemTotal)}
                                    </Text>
                                  </View>
                                  <View className="mt-1 px-2 py-1 w-[90px] flex-row justify-between bg-gray-100 rounded-sm">
                                    <TouchableOpacity
                                      onPress={() =>
                                        updateQuantity(food.id, -1)
                                      }
                                      className="rounded-full"
                                    >
                                      <Minus color="#260f08" size={14} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                      onPress={() => updateQuantity(food.id, 1)}
                                      className="rounded-full"
                                    >
                                      <Plus color="#260f08" size={14} />
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <TouchableOpacity
                              onPress={() => removeFromCart(food.id)}
                              className="basis-[15%] flex flex-row justify-end"
                            >
                              <XCircle color="#87635a" size={20} />
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </View>
                  )}

                  <View className="mt-4 flex-row justify-between items-center">
                    <Text className="text-[#ad8985] text-sm font-bold">
                      Order Total
                    </Text>
                    <Text className="text-lg font-bold text-[#260f08]">
                      {formatPrice(cartTotal)}
                    </Text>
                  </View>

                  <View className="mt-8 w-full flex flex-row justify-center">
                    <TouchableOpacity
                      onPress={handlePlaceOrder}
                      className="w-fit px-10 py-3 rounded-full bg-[#383838] transition-colors duration-200 ease-linear cursor-pointer"
                    >
                      <Text className="text-base font-bold text-white text-center">
                        Add More
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="mt-5 flex-row items-center justify-center gap-2 rounded-md bg-[#fcf9f7] p-2">
                    <Image
                      source={require("../../assets/images/icon-carbon-neutral.png")}
                      style={{ width: 25, height: 25 }}
                    />
                    <Text className="text-sm text-[#260f08]">
                      This is a{" "}
                      <Text className="font-bold">carbon-neutral</Text>{" "}
                      delivery.
                    </Text>
                  </View>

                  <View className="w-full mt-10 pr-5 flex flex-row items-center justify-between gap-5">
                    <TouchableOpacity
                      onPress={openConfirmModal}
                      className="basis-[50%] px-6 py-3 rounded-full bg-[#c73a0f] transition-colors duration-200 ease-linear cursor-pointer"
                    >
                      <View className="flex-row items-center justify-center">
                        <Text className="text-base font-bold text-white text-center">
                          Place Order
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handlePlaceOrder}
                      className="basis-[50%] px-6 py-3 rounded-full bg-[#c73a0f] transition-colors duration-200 ease-linear cursor-pointer"
                    >
                      <Text className="text-base font-bold text-white text-center">
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Confirmation Modal */}
        <Modal
          visible={isConfirmModalOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={closeConfirmModal}
        >
          <TouchableWithoutFeedback onPress={closeConfirmModal}>
            <View className="w-full h-full flex flex-col justify-center items-center z-50 bg-black/50">
              <View className="w-[90%] px-5 py-8 bg-white rounded-md shadow-sm">
                <View>
                  <View>
                    <View>
                      <CircleCheck color="#0da517" size={35} />
                    </View>
                    <Text className="mt-3 text-[#260f08] text-4xl font-extrabold">
                      Order
                    </Text>
                    <Text className="text-[#260f08] text-4xl font-extrabold leading-10">
                      Confirmed
                    </Text>
                    <Text className="mt-3 text-sm font-normal text-[#87635a]">
                      We hope you enjoy your food!
                    </Text>
                  </View>
                  <View className="mt-10 bg-[#fcf9f7] p-3 rounded-md">
                    {cartItems.length > 0 ? (
                      cartItems.map(({ food, quantity }) => (
                        <View
                          key={food.id}
                          className="flex flex-row items-center gap-3 py-3 border-b border-b-black/10 last:border-b-0"
                        >
                          <View className="bg-blue-200 rounded-md overflow-hidden w-10 h-10">
                            <Image
                              source={food.image.thumbnail}
                              alt="food"
                              className="w-10 h-10"
                            />
                          </View>
                          <View className="flex-1">
                            <Text className="text-sm leading-tight font-medium text-[#260f08]">
                              {food.name}
                            </Text>
                            <Text className="text-[#ad8985] text-sm">
                              {quantity}x · {formatPrice(food.price)}
                            </Text>
                          </View>
                          <Text className="text-[#ad8985] text-sm font-medium">
                            {formatPrice(food.price * quantity)}
                          </Text>
                        </View>
                      ))
                    ) : (
                      <Text className="text-sm text-[#87635a]">
                        No food item selected.
                      </Text>
                    )}

                    <View className="mt-4 flex flex-row justify-between items-center">
                      <Text className="text-[#ad8985] text-base font-bold">
                        Order Total
                      </Text>
                      <Text className="mt-1 text-2xl font-extrabold text-[#260f08]">
                        {formatPrice(cartTotal)}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={closeConfirmModal}
                  className="w-full mt-10 px-6 py-3 rounded-full bg-[#c73a0f] transition-colors duration-200 ease-linear cursor-pointer"
                >
                  <View>
                    <Text className="text-base font-bold text-white text-center">
                      Confirm order
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     height: 700,
//     // display: "flex",
//     backgroundColor: "#fae1fc",
//     // flexDirection: "column",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },

//   containerB: {
//     width: 350,
//     height: 400,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f1f0f0",
//     borderRadius: 5,
//   },

//   profile: {
//     width: 300,
//     height: 200,
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//   },
//   img: {
//     width: 200,
//     height: 150,
//   },
//   name: {
//     fontSize: 30,
//     fontWeight: 900,
//     color: "purple",
//     fontFamily: "Caveat_400Regular",
//   },
//   city: {
//     marginTop: 10,
//     fontSize: 20,
//     fontWeight: 500,
//     color: "#05a447",
//     fontStyle: "italic",
//     fontFamily: "LobsterTwo_400Regular",
//   },
//   goalContainer: {
//     marginTop: 10,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   goalText1: {
//     fontSize: 16,
//     fontWeight: 400,
//     color: "#000000",
//     fontFamily: "Pacifico_400Regular",
//   },
//   goalText2: {
//     fontSize: 16,
//     fontWeight: 400,
//     color: "#1303c0",
//     fontFamily: "Pacifico_400Regular",
//   },
//   contactContainer: {
//     marginTop: 30,
//     width: 150,
//     height: 50,
//     backgroundColor: "#870578",
//     borderRadius: 12,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#0e028a",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   contactText: {
//     fontSize: 16,
//     color: "#ffffff",
//     fontWeight: 600,
//   },
// });

import { Caveat_400Regular, useFonts } from "@expo-google-fonts/caveat";
import {
  LobsterTwo_400Regular,
  LobsterTwo_700Bold,
} from "@expo-google-fonts/lobster-two";
import { Image } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { ShoppingCart } from "lucide-react-native";
import { useEffect } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { dessertsData } from "../../data";

export default function Home() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    Caveat_400Regular,
    LobsterTwo_400Regular,
    LobsterTwo_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView className="bg-[#fcf9f7] py-5">
      <View className="w-full bg-[#f4edeb] rounded-xl flex items-center justify-center mb-5">
        <View>
          <View>
            <Text className="text-4xl mb-4 font-bold text-[#260f08] font-LobsterTwo_700Bold">
              Desserts
            </Text>
          </View>

          <div className="mt-3 flex flex-col gap-4 bg-white p-3">
            {dessertsData.map((dessert) => {
              const { id, image, name, category, price } = dessert;
              return (
                <View key={id}>
                  <View className="p-5 bg-gray-50 rounded-md">
                    <View className="w-[300px] h-[200px] rounded-xl bg-white shadow-lg shadow-[#f4edeb]">
                      <Image
                        source={image.mobile}
                        alt="dessert"
                        className="w-full h-full rounded-xl"
                      />
                    </View>
                    <View className="w-full flex flex-row justify-center">
                      <TouchableOpacity
                        onPress={() => Alert.alert("Your pressed me")}
                        className="-mt-3 px-6 py-1.5 flex flex-row items-center justify-center gap-1 text-sm rounded-2xl border border-[#c9aea6] bg-[#fcf9f7] font-bold cursor-pointer"
                      >
                        <View>
                          <ShoppingCart className="text-[#c73a0f] text-sm" />
                        </View>
                        <Text className="text-[#260f08]">Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                    <View className="p-3 mt-1 rounded-md">
                      <Text className="text-[#ad8985] text-sm">{category}</Text>
                      <Text className="text-[#260f08] text-sm font-bold">
                        {name}
                      </Text>
                      <Text className="text-[#c73a0f] text-sm font-bold">
                        {`$${price.toFixed(2)}`}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </div>
        </View>
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

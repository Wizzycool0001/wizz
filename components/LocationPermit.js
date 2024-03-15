import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Onboarding_1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 30
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: "40%",
          height: "10%",
        }}
      >
        <Text
          style={{
            left: 150,
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: "90%",
          marginTop: "5%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: "40%",
            width: "75%",
            margin: "auto",
            marginTop: "10%",
          }}
          source={require("./../assets/location-removebg-preview.png")}
        />

        <Text
          style={{
            marginTop: "3%",
            textAlign: "center",
            fontSize: 17,
            fontWeight: 400,
            width: "90%",
          }}
        >
          By granting permission, you can search for restaurants around you and
          receive more accurate delivery
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: "95%",
            borderRadius: 10,
            marginTop: "20%",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
          }}
          onPress={() => navigation.navigate("Onboarding-1")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding_1;

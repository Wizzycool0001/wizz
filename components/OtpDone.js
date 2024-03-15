import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default OtpDone = () => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        paddingVertical: 30,
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <Image
        style={{
          height: "30%",
          width: "50%",
          margin: "auto",
          marginTop: "50%",
        }}
        source={require("./../assets/Male Memojis.png")}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          You Are doing well
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            paddingHorizontal: 20,
            fontSize: 16,
          }}
        >
          Congratulations! Your account has been successfully created. You are
          now ready to embark delicious journey with foodie delight.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
          width: "100%",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{color: 'white'}}> Add address </Text>
      </TouchableOpacity>
    </View>
  );
};

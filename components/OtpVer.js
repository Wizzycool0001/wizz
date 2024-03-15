import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
const OtpVer = () => {
    const navigation= useNavigation();
  return (
    <View
      style={{
        height: "100%",
        padding: 30,
      }}
    >
      <Text style={{ fontSize: 30, marginVertical: 20, fontWeight:'bold'}}>
        OTP Verification
      </Text>
      <Text style={{ marginBottom: 30 }}>
        Thank you for signing up, Enter the 4-digits that we have sent via the
        phone number 
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 44,
          marginVertical: 30,
        }}
      >
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
            textAlign: "center",
          }}
        />
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
            textAlign: "center",
          }}
        />
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
            textAlign: "center",
          }}
        />
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
            textAlign: "center",
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text>00.30</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
        onPress={() => navigation.navigate("OtpDone")}
        >
        <Text style={{ color: 'white'}}> Verify my account </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          margin: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Didn't recieve a code?</Text>
        <TouchableOpacity>
          <Text style={{ color: "red" }}> Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OtpVer;

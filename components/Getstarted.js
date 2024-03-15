import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Telefono from "./Telefono";
import Email from "./Email";
const Getstarted = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  const [toggle, setToggle] = useState("email");

  const handleToggle = (next) => {
    setToggle(next);
  };
  return (
    <View style={{ backgroundColor: "red" }}>
      <Image
        source={require("./../assets/LOgo.png")}
        style={{ height: 100, width: 100, opacity: 8 }}
      />
      <View
        style={{
          height: "90%",
          backgroundColor: "white",
          borderRadius: 13,
          paddingHorizontal: 30,
          paddingVertical: 10,
        }}
      >
        {/* Text for get started */}
        <Text style={{ fontSize: 30, paddingVertical: 5 }}>Get Started</Text>
        <Text style={{ paddingVertical: 10 }}>
          Sign up today and start placing your order
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "red",
            borderRadius: 8,
            justifyContent: "center",
          }}
        >
          {/* Email */}
          <TouchableOpacity
            style={{
              backgroundColor: toggle == "email" ? "red" : "white",
              paddingHorizontal: 16,
              paddingVertical: 14,
              width: "50%",
              borderBottomLeftRadius: 6,
              borderTopLeftRadius: 6,
            }}
            onPress={() => handleToggle("email")}
          >
            <Text style={{color: toggle == 'email' ? 'white' : 'red'}}>Email Address</Text>
          </TouchableOpacity>

          {/* Phone number */}
          <TouchableOpacity
            style={{
              backgroundColor: toggle == "phone" ? "red" : "white",
              paddingHorizontal: 16,
              paddingVertical: 14,
              width: "50%",
              borderBottomRightRadius: 6,
              borderTopRightRadius: 6,
            }}
            onPress={() => handleToggle("phone")}
          >
            <Text style={{color: toggle == 'phone' ? 'white' : 'red'}}>Phone Number</Text>
          </TouchableOpacity>
        </View>
        {toggle == "phone" ? <Telefono /> : <Email />}
        <View
          style={{
            marginVertical: 10,
            flexWrap: "wrap",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "red" : "red"}
          />
          <Text> If you are creating a new account,</Text>
          <TouchableOpacity>
            <Text style={{ color: "red" }}>Terms & Condition</Text>
          </TouchableOpacity>
          <Text> and </Text>
          <TouchableOpacity>
            <Text style={{ color: "red" }}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text> will apply</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            padding: 17,
          }}
          onPress={() => navigation.navigate("OTP")}
        >
          {/* Button for get started  */}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "white",
            }}
          >
            GET STARTED
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 5}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={{ color: "red" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Getstarted;

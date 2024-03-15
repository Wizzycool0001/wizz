import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { React, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginEmail from "./LoginEmail";
import LoginPhone from "./LoginPhone";

export default Login = () => {
   const Navigation = useNavigation();

   const [toggle, setToggle] = useState("email");

   const handleToggle = (next) => {
    setToggle(next);
   };
  return (
    <View style={{backgroundColor: 'red'}}> 
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
        {/* Text for get login */}
        <Text style={{ fontSize: 30, paddingVertical: 5 }}>Login</Text>
        <Text style={{ paddingVertical: 10 }}>
          Welcome back, login today to place your order
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
        {toggle == "email" ? <LoginEmail /> : <LoginPhone />}
       <View style={{marginTop: 30}} >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            padding: 17,
            marginBottom: 20,
          }}
          //onPress={() => navigation.navigate("OTP")}
        >
          {/* Button for get started  */}
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 5,}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={{ color: "red" }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  ); 
};

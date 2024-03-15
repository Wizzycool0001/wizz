import { View, Image, Text, TextInput } from "react-native";


const LoginPhone =()=>{

  return (
    <View style={{justifyContent: 'center'}}>
    <Text
      style={{
        marginTop: 30, marginBottom: 10
      }}
    >
      Phone number
    </Text>
    <TextInput
      style={{
        borderRadius: 7,
        borderWidth: 3,
        padding: 14,
        borderColor: "#E0E0E0",
      }}
      placeholder="Your phone number"
    />
    <Text style={{ marginTop: 30, marginBottom: 10 }}>Password</Text>
    <TextInput
      style={{
        borderRadius: 8,
        borderWidth: 3,
        padding: 14,
        borderColor: "#E0E0E0",
      }}
      placeholder="Password"
    />
    </View>


  )
};


export default LoginPhone;


import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import React from "react";
import { formDataAtom } from "../theatom/formAtom";
import { useAtom } from "jotai";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation(true);
  const [formData, setFormData] = useAtom(formDataAtom);
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };
  const handleSubmit = () => {
    navigation.navigate("Profile");
    console.log("The form Data is:", formData);
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <TextInput
       placeholder="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Address"
        value={formData.address}
        onChangeText={(text) => handleChange("address", text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Home;

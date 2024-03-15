import { Text, View, StyleSheet } from "react-native";
import React from "react"
import { formDataAtom } from "../theatom/formAtom";
import { useAtom } from "jotai";


const Profile = ()=>{
    const [formData] = useAtom(formDataAtom);
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text>Welcome {formData.firstName}</Text>
            <Text>and your email is {formData.email}</Text>
            <Text>and your address is {formData.address}</Text>
            <Text>You told us that your last name is {formData.lastName}</Text>
        </View>
    );
};

export default Profile;

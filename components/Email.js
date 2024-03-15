import { View, Text, TextInput} from "react-native";

const Email=()=> {
    return (
        <View
        style={{
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            padding: 10,
          }}
        >
          Full name
        </Text>
        <TextInput
          style={{
            borderRadius: 7,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
          }}
          placeholder="Full name"
        />
        <Text style={{ padding: 10 }}>Email address</Text>
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
          }}
          placeholder="Email address"
        />
        <Text style={{ padding: 10 }}>Password</Text>
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
          }}
          placeholder="Password"
        />
        <Text style={{ padding: 10 }}>Confirm password</Text>
        <TextInput
          style={{
            borderRadius: 8,
            borderWidth: 3,
            padding: 14,
            borderColor: "#E0E0E0",
          }}
          placeholder="Confirm password"
        />
      </View>
    )
};

export default Email;
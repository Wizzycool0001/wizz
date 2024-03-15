import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Onboarding_2 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: 20,
          height: "5%",
          width: '20%',
          marginLeft: 350,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 600,
            padding: 5
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: '-20%',
          alignItems: "center",
          justifyContent: "center",
          height: "90%",
          width: "100%",
        }}
      >
        <Image
          style={{
            height: 250,
            width: 370,
            marginTop: 150
          }}
          source={require("./../assets/R-removebg.png")}
        />

        <Text
          style={{
            marginTop: 70,
            textAlign: "center",
            fontSize: 30,
            fontWeight: 900,
          }}
        >
          Discover New Cuisines
        </Text>

        <Text
          style={{
            marginTop: 20,
            fontSize: 17,
            textAlign: "center",
            alignSelf: "center",
            height: 60,
            justifyContent: "space-evenly",
          }}
        >
          From local favourite to global delight, find the perfect dish for
          every taste
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#EC1C23",
            width: "95%",
            alignSelf: "center",
            height: "10%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: "10%",
          }}
          onPress={() => navigation.navigate('Onboarding-3')}
        >
          <Text
            style={{
              textAlign: "center",
              color: 'white',
              fontSize: 20
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding_2;

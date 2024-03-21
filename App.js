import 'react-native-gesture-handler'
import { Text, View, TouchableOpacity, Image } from "react-native";
import Duolingo from './components/Duolingo';
import Onboarding_2 from "./components/Onboarding_2";
import Onboarding_3 from "./components/Onboarding_3";
import Onboarding_1 from "./components/Onboarding-1";
import Location from "./components/Location";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Getstarted from "./components/Getstarted";
import LocationPermit from "./components/LocationPermit";
import Test from "./components/Test";
import OtpVer from "./components/OtpVer";
import OtpDone from "./components/OtpDone";
import Login from "./components/Login";
import LoginPhone from "./components/LoginPhone";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomSheet } from '@gorhom/bottom-sheet';
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ServiceScreen from "./screens/ServiceScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Thefirst from "./Ehail/Thefirst";
import { createDrawerNavigator} from '@react-navigation/drawer';
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const app = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
       {/* <Stack.Screen name="Duolingo" component={Duolingo} options={{ headerShown: false }} /> */}
       {/* <Tab.Screen name="LocationPermit" component={LocationPermit} options={{headerShown: false}}/>
        <Tab.Screen name="Onboarding-1" component={Onboarding_1} options={{ headerShown: false }} />
       <Tab.Screen name="Onboarding-2" component={Onboarding_2} options={{ headerShown: false }} /> 
        <Tab.Screen name="Onboarding-3" component={Onboarding_3} options={{ headerShown: false }} />
        <Tab.Screen name="Getstarted" component={Getstarted} options={{ headerShown: false }} /> 
        <Tab.Screen name="Test" component={Test} options={{ headerShown: false }} />
         <Tab.Screen name="OTP" component={OtpVer} options={{ headerShown: false }} />
        <Tab.Screen name="OtpDone" component={OtpDone} options={{ headerShown: false }} />
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="LoginPhone" component={LoginPhone} options={{ headerShown: false }} /> */}
        {/* <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Service" component={ServiceScreen} options={{ headerShown: false }} /> */}
        <Drawer.Screen name="First" component={Thefirst} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default app;
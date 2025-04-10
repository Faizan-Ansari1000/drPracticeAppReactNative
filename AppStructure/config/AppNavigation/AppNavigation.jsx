import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Toast from "react-native-toast-message";
import Login from "../../Auth/Login";
import SignUp from "../../Auth/SignUp";
import Home from "../../Screens/User/Home";
import Admin from "../../Screens/Admin/Admin";
import Doctors from "../../Screens/User/Doctors";
import { StatusBar } from "react-native";
import Booking from "../../Screens/User/Booking";
import Attention from "../../Screens/User/Attention";
import Profile from "../../Screens/User/Profile";
import AboutApp from "../../Screens/User/Modal/AboutApp";
import Developer from "../../Screens/User/Modal/Developer";
import InfoCenter from "../../Screens/User/Modal/InfoCenter";
import Payment from "../../Screens/User/Modal/Payment";
import Support from "../../Screens/User/Modal/Support";
import Setting from "../../Screens/User/Setting";
import FAQs from "../../Screens/User/Modal/FAQs";
import Registered from "../../Screens/Admin/Registered";
import PostDoctor from "../../Screens/Admin/PostDoctor";
import AdminSetting from "../../Screens/Admin/AdminSetting";
import Appointments from "../../Screens/Admin/Appointments";
import Notified from "../../Screens/User/Notified";
import UserComplain from "../../Screens/Admin/UserComplain";
import UpdateToUser from "../../Screens/Admin/UpdateToUser";
import UpdateForUser from "../../Screens/User/UpdateForUser";



export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                    <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Admin" options={{ headerShown: false }} component={Admin} />
                    <Stack.Screen name="Doctors" options={{ headerShown: false }} component={Doctors} />
                    <Stack.Screen name="Booking" component={Booking} />
                    <Stack.Screen name="Attention" component={Attention} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="AboutApp" options={{ headerShown: false }} component={AboutApp} />
                    <Stack.Screen name="Developer" component={Developer} />
                    <Stack.Screen name="InfoCenter" component={InfoCenter} />
                    <Stack.Screen name="Payment" options={{ headerShown: false }} component={Payment} />
                    <Stack.Screen name="Support" options={{ headerShown: false }} component={Support} />
                    <Stack.Screen name="Setting" component={Setting} />
                    <Stack.Screen name="FAQs" component={FAQs} />
                    <Stack.Screen name="Registered" component={Registered} />
                    <Stack.Screen name="PostDoctor" component={PostDoctor} />
                    <Stack.Screen name="AdminSetting" options={{ headerShown: false }} component={AdminSetting} />
                    <Stack.Screen name="Appointments" component={Appointments} />
                    <Stack.Screen name="Notified" component={Notified} />
                    <Stack.Screen name="UserComplain" options={{ headerShown: false }} component={UserComplain} />
                    <Stack.Screen name="UpdateToUser" options={{ headerShown: false }} component={UpdateToUser} />
                    <Stack.Screen name="UpdateForUser" options={{ headerShown: false }} component={UpdateForUser} />
                </Stack.Navigator>
                <Toast />
            </NavigationContainer>
        </>
    )
}
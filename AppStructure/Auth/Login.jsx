import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../config/APIs/ApiInstance";

export default function Login() {
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loginUser = async () => {
    console.log("Login button pressed");

    if (!model.email || !model.password) {
      console.log("Validation Failed: Missing fields");
      return Toast.show({
        type: "error",
        text1: "Validation Error",
        text2: "Please provide all fields",
      });
    }

    try {
      setLoading(true);
      console.log("Sending request to login API with:", model);

      const res = await ApiInstance.post("/authRoute/login", model);
      console.log("Login API response:", res.data);

      const { role } = res.data;

      if (role === "admin") {
        Toast.show({ type: "success", text1: "Logged In", text2: "Welcome Admin" });
        navigation.navigate("Admin");
      } else if (role === "user") {
        Toast.show({ type: "success", text1: "Logged In", text2: "Welcome User" });
        navigation.navigate("Home");
      } else {
        console.log("Unknown role:", role);
        Toast.show({ type: "error", text1: "Login Failed", text2: "Invalid role" });
      }

    } catch (error) {
      console.log("Login Error:", error?.response?.data?.message || error.message || error);
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: error?.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Design */}
      <View style={styles.topDesign}>
        <Text style={styles.topText}>Welcome Back</Text>
        <Text style={styles.subText}>Login to continue and access your dashboard</Text>
      </View>

      {/* Heading */}
      <Text style={styles.heading}></Text>

      {/* Login Instructions */}
      <Text style={styles.infoText}>
      </Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          placeholderTextColor="#7b241c"
          onChangeText={(e) => setModel({ ...model, email: e })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#7b241c"
          onChangeText={(e) => setModel({ ...model, password: e })}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} disabled={loading} onPress={loginUser}>
        {loading ? <ActivityIndicator size={24} color={"#fff"} /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Section */}
      <View style={styles.signUpButton}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  topDesign: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 160,
    backgroundColor: "#7b241c",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 160, 
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    color: "#000",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#7b241c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 10,
    color: "#7b241c",
    fontWeight: "bold",
    textAlign: "center",
  },
  signupText: {
    color: "black",
  },
  signupLink: {
    paddingStart: 5,
    fontWeight: "bold",
    color: "#7b241c",
  },
  signUpButton: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
});

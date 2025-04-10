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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp() {
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const signUpUser = async () => {
    if (!model.name || !model.email || !model.password) {
      return Toast.show({
        type: "error",
        text1: "Validation error",
        text2: "Please fill all fields!",
      });
    }
    try {
      setLoading(true);
      const res = await ApiInstance.post("/authRoute/signUpUser", model);
      await AsyncStorage.setItem("userId", res.data.data._id);
      console.log("Signup Response:", res.data);

      Toast.show({
        type: "success",
        text1: "SignUp Successful",
        text2: "Account created successfully!",
      });
      setLoading(false);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.message);
      Toast.show({
        type: "error",
        text1: "SignUp Failed",
        text2: error.message,
      });
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section with Design */}
      <View style={styles.topDesign}>
        <Text style={styles.topText}>Create Account</Text>
        <Text style={styles.subText}>Welcome to our community! Creating an account is quick and easy.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          keyboardType="default"
          placeholderTextColor="#7b241c"
          onChangeText={(e) => setModel({ ...model, name: e })}
        />
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

      {/* SignUp Button */}
      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={signUpUser}
      >
        {loading ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={styles.buttonText}>SignUp</Text>
        )}
      </TouchableOpacity>

      {/* Login Section */}
      <View style={styles.loginButton}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Login</Text>
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
  inputContainer: {
    width: "100%",
    marginTop: 190, 
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#7b241c",
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
  loginText: {
    color: "black",
  },
  loginLink: {
    paddingStart: 5,
    fontWeight: "bold",
    color: "#7b241c",
  },
  loginButton: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
});

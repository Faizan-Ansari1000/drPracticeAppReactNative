import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/APIs/ApiInstance";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";



export default function Booking() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const sendApplication = async () => {
        if (!model.name || !model.email || !model.phoneNo || !model.date_time || !model.address || !model.seek || !model.message || !model.drName
        ) {
            return Toast.show({
                type: "error",
                text1: "Validation error",
                text2: "Please fill all fields",
            });
        }
        if (!model.email.includes("@")) {
            return Toast.show({
                type: "error",
                text1: "@ is required in email",
            });
        }
        try {
            setLoading(true);
            const res = await ApiInstance.post(`/userRoute/booking`, model);
            Toast.show({
                type: "success",
                text1: "Application Submitted",
                text2: "Your form was successfully sent",
            });
            navigation.navigate("Attention");
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            Toast.show({
                type: "error",
                text1: "Server error",
                text2: "Something went wrong",
            });
            setLoading(false);
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcon name="cancel" size={24} color={'#7b241c'} />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Book Your Appointment</Text>
            <Text style={styles.subText}>
                Please fill the form below to schedule your appointment with our top-rated doctors. We care for your health.
            </Text>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, name: e })}
                />
                <TextInput
                    placeholder="Email Address"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, email: e })}
                />
                <TextInput
                    placeholder="Contact No"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, phoneNo: e })}
                />
                <TextInput
                    placeholder="Home Address"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, address: e })}
                />
                <TextInput
                    placeholder="Message"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, message: e })}
                />
                <TextInput
                    placeholder="Date and Time"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, date_time: e })}
                />
                <TextInput
                    placeholder="Patient of Disease"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, seek: e })}
                />
                <TextInput
                    placeholder="Doctor Name"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, drName: e })}
                />
                <TouchableOpacity
                    style={[styles.button, loading && { opacity: 0.7 }]}
                    onPress={sendApplication}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size={24} color={"#fff"} />
                    ) : (
                        <Text style={styles.buttonText}>Send</Text>
                    )}
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f9f9f9",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7b241c",
        marginBottom: 10,
        textAlign: "center",
    },
    subText: {
        fontSize: 14,
        color: "#444",
        textAlign: "center",
        marginBottom: 20,
    },
    formContainer: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    input: {
        // backgroundColor: "#f0f0f0",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 15,
        color: "#333",
        borderWidth: 1,
        borderColor: '#7b241c'
    },
    button: {
        backgroundColor: "#7b241c",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

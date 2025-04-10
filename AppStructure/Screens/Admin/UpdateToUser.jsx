import { useState } from "react";
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/APIs/ApiInstance";

export default function UpdateToUser() {
    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);

    const sendUpdate = async () => {
        if (!model.title || !model.date || !model.category || !model.description || !model.priority) {
            return Toast.show({
                type: "error",
                text1: "Validation error",
                text2: "All Fields are required",
            });
        }

        try {
            setLoading(true);
            const res = await ApiInstance.post("/userRoute/update", model);
            Toast.show({
                type: "success",
                text1: "Send Update",
                text2: "Your update has been successfully posted",
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            Toast.show({
                type: "error",
                text1: "Server error",
                text2: error.message,
            });
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>

            <ScrollView>
                <Text style={styles.heading}>Post Update for Users</Text>
                <TextInput
                    placeholder="Title"
                    placeholderTextColor="#888"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, title: e })}
                />

                <TextInput
                    placeholder="Date (e.g., 2025-04-10)"
                    placeholderTextColor="#888"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, date: e })}
                />

                <TextInput
                    placeholder="Category"
                    placeholderTextColor="#888"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, category: e })}
                />

                <TextInput
                    placeholder="Description"
                    placeholderTextColor="#888"
                    style={[styles.input, styles.descriptionInput]}
                    multiline
                    onChangeText={(e) => setModel({ ...model, description: e })}
                />

                <TextInput
                    placeholder="Priority (High / Medium / Low)"
                    placeholderTextColor="#888"
                    style={styles.input}
                    onChangeText={(e) => setModel({ ...model, priority: e })}
                />

            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={sendUpdate}>
                {loading ? (
                    <ActivityIndicator size={24} color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Post Update</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#7b241c",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#7b241c",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        color: "#333",
        marginBottom: 15,
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: "top",
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

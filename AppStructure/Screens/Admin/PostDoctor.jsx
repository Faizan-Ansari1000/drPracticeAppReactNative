import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import Toast from "react-native-toast-message";
import ApiInstance from "../../config/APIs/ApiInstance";

export default function PostDoctor() {

    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false);

    const postDoctor = async () => {
        if (!model.drName || !model.email || !model.days || !model.category || !model.branch || !model.fees) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please Provide All Fields' });
        }
        if (!model.email.includes('@')) {
            return Toast.show({ type: 'error', text2: '@ is must required' });
        }
        try {
            setLoading(true);
            const res = await ApiInstance.post('/userRoute/doctors', model);
            Toast.show({ type: 'success', text1: 'Post', text2: 'Doctor has been successfully Added on User Portal' });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>🩺 Post a Doctor</Text>
            <Text style={styles.subtitle}>Fill the form below to register a new doctor</Text>

            <TextInput
                style={styles.input}
                placeholder="Doctor Name"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, drName: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, email: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Days (e.g. Mon - Fri)"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, days: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Category (e.g. Cardiologist)"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, category: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Branch (e.g. Karachi Center)"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, branch: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Fees (in PKR)"
                placeholderTextColor="#999"
                keyboardType="numeric"
                onChangeText={(e) => setModel({ ...model, fees: e })}
            />
            <TextInput
                style={styles.input}
                placeholder="Image URL (Optional)"
                placeholderTextColor="#999"
                onChangeText={(e) => setModel({ ...model, imageUrl: e })}
            />

            <TouchableOpacity
                style={[styles.button, loading && { backgroundColor: '#aaa' }]}
                disabled={loading}
                onPress={postDoctor}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Post Doctor</Text>
                )}
            </TouchableOpacity>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: '#7f8c8d',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#7b241c',
    },
    button: {
        backgroundColor: '#7b241c',
        paddingVertical: 14,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

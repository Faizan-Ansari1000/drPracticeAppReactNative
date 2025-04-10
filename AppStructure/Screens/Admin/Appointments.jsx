import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
} from "react-native";
import ApiInstance from "../../config/APIs/ApiInstance";
import Toast from "react-native-toast-message";

export default function Appointments() {

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [model, setModel] = useState({});

    const getData = async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get(`/userRoute/booking`);
            setPostData(res.data.data);
            setLoading(false)
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Something went wrong', text2: 'Server error' })
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const sendNotification = async () => {
        if (!model.email || !model.date_time || !model.drName || !model.confirmation || !model.issueDate) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'All Fields are required' })
        }
        if (!model.email.includes('@')) {
            return Toast.show({ type: 'error', text1: 'Typing error', text2: '@ is must required' })
        }
        try {
            setLoading(true)
            const res = await ApiInstance.post('/userRoute/sendNotification', model)
            Toast.show({ type: 'success', text1: 'Submitted', text2: 'Successfully Send Notification' })
            setLoading(false)
        } catch (error) {
            console.log(error)
            Toast.show({ type: 'error', text1: 'Server error', text2: error.message })
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={isOpen}
                onRequestClose={() => setIsOpen(false)}
                animationType="slide"
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Appointment Details</Text>

                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            placeholder="User Email Address"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, email: e })}
                        />
                        <TextInput
                            style={styles.input}
                            keyboardType="default"
                            placeholder="Date and Time"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, date_time: e })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Dr Name"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, drName: e })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirmation Message"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, confirmation: e })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Notification Issued Date"
                            placeholderTextColor="#aaa"
                            onChangeText={(e) => setModel({ ...model, issueDate: e })}
                        />

                        <TouchableOpacity style={styles.sendButton} onPress={sendNotification}>
                            {loading ? <ActivityIndicator size={24} color={'white'} /> : <Text style={styles.closeButtonText}>Send</Text>}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setIsOpen(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {loading ? (
                <ActivityIndicator size="large" color="#7b241c" style={{ marginTop: 40 }} />
            ) : (
                <FlatList
                    data={postData}
                    contentContainerStyle={{ paddingBottom: 80 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} onPress={() => setIsOpen(true)}>
                            <Text style={styles.cardTitle}>Patient: {item.name}</Text>
                            <Text style={styles.cardText}> Email: {item.email}</Text>
                            <Text style={styles.cardText}> Phone: {item.phoneNo}</Text>
                            <Text style={styles.cardText}> Address: {item.address}</Text>
                            <Text style={styles.cardText}> Problem: {item.seek}</Text>
                            <Text style={styles.cardText}> Date & Time: {item.date_time}</Text>
                            <Text style={styles.cardText}> Message: {item.message}</Text>
                            <Text style={styles.cardText}> Doctor: {item.drName}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 14,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: "#7b241c",
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#7b241c",
        marginBottom: 6,
    },
    cardText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 3,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#7b241c",
        marginBottom: 15,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#7b241c",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 14,
        color: "#333",
    },
    closeButton: {
        backgroundColor: "#7b241c",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
    sendButton: {
        backgroundColor: "#229954",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
});

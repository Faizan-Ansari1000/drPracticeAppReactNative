import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import ApiInstance from "../../config/APIs/ApiInstance";
import Toast from "react-native-toast-message";

export default function Notified() {

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getData = useCallback(async () => {
        try {
            setLoading(true)
            const res = await ApiInstance.get('/userRoute/sendNotification')
            console.log(res.data)
            setPostData(res.data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            Toast.show({ type: 'error', text1: 'Server error', text2: 'No Data Get' })
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size={30} color={'#7b241c'} />
            ) : (
                <FlatList
                    data={postData}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}>
                            <Text style={styles.label}>Email:</Text>
                            <Text style={styles.value}>{item.email}</Text>

                            <Text style={styles.label}>Doctor Name:</Text>
                            <Text style={styles.value}>{item.drName}</Text>

                            <Text style={styles.label}>Date & Time:</Text>
                            <Text style={styles.value}>{item.date_time}</Text>

                            <Text style={styles.label}>Admin Approval:</Text>
                            <Text style={styles.value}>{item.confirmation}</Text>

                            <Text style={styles.label}>Notification Date:</Text>
                            <Text style={styles.value}>{item.issueDate}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#7b241c',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7b241c',
        marginTop: 6,
    },
    value: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    }
});

import { useCallback, useEffect, useState } from "react";
import ApiInstance from "../../config/APIs/ApiInstance";
import Toast from "react-native-toast-message";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";

export default function UserComplain() {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/userRoute/complaint');
            console.log(res.data);
            setPostData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Toast.show({ type: 'error', text1: 'Server error', text2: error.message });
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Users Feedback</Text>
            {loading ? (
                <ActivityIndicator size={30} color={'#7b241c'} style={{ marginTop: 30 }} />
            ) : (
                <FlatList
                    data={postData}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}>
                            <Text style={styles.label}>User Name:</Text>
                            <Text style={styles.value}>{item.name}</Text>

                            <Text style={styles.label}>User Email Address:</Text>
                            <Text style={styles.value}>{item.email}</Text>

                            <Text style={styles.label}>Feedback / Complain:</Text>
                            <Text style={styles.value}>{item.complain}</Text>
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
        backgroundColor: '#f8f8f8',
        padding: 20,
        paddingTop: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#7b241c',
        marginBottom: 20,
        alignSelf: 'center',
    },
    listContainer: {
        paddingBottom: 100,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: '#7b241c',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    value: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
});

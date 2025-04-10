import { useCallback, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import ApiInstance from "../../config/APIs/ApiInstance";

export default function Registered() {

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);


    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/authRoute/signUpUser');
            setPostData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>👥 Registered Users</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#7b241c" style={{ marginTop: 40 }} />
            ) : (
                <FlatList
                    data={postData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.email}>{item.email}</Text>
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
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        elevation: 3,
        borderLeftWidth: 5,
        borderLeftColor: '#7b241c',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#2c3e50',
    },
    email: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});

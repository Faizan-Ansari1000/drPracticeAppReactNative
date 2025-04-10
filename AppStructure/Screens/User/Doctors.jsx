import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ApiInstance from "../../config/APIs/ApiInstance";
import Toast from "react-native-toast-message";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Doctors() {

    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await ApiInstance.get('/userRoute/doctors');
            setPostData(res.data.data);
            setLoading(false);
        } catch (error) {
            Toast.show({ type: 'error', text1: 'No Data Found (Please wait)' });
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Find Your Specialist</Text>
            {loading ? (
                <ActivityIndicator size={30} color={'#2c3e50'} style={styles.loader} />
            ) : (
                <FlatList
                    data={postData}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Booking')}>
                            <Image source={{ uri: item.imageUrl }} resizeMode="cover" style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.category}>{item.category}</Text>
                                <Text style={styles.details}>Days: {item.days}</Text>
                                <Text style={styles.details}>Fees: ${item.fees}</Text>
                                <Text style={styles.details}>Branch: {item.branch}</Text>
                            </View>
                            <MaterialIcon name="chevron-right" size={28} style={styles.icon} />
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
        backgroundColor: "#fff",
        padding: 5,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2c3e50",
        marginBottom: 15,
        textAlign: "center",
    },
    loader: {
        marginTop: 20,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#f8f9fa",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        elevation: 5,
        margin:2,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2c3e50",
    },
    category: {
        fontSize: 16,
        color: "#581845",
        fontWeight: "bold",
    },
    details: {
        fontSize: 14,
        color: "gray",
    },
    icon: {
        color: "#2c3e50",
    },
});

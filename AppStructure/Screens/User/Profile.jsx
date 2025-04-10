import { useCallback, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiInstance from "../../config/APIs/ApiInstance";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProfile = useCallback(async () => {
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (!userId) {
                return;
            }
            setLoading(true);
            const res = await ApiInstance.get(`/authRoute/signUpUser/${userId}`);
            setUserData(res.data.data);
        } catch (err) {
            console.log("Profile Fetch Error:", err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getProfile();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#7b241c" />
            </View>
        );
    }

    if (!userData) {
        return (
            <View style={styles.center}>
                <Text style={styles.error}>No user data found</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileCard}>
                <Image
                    source={{
                        uri: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
                    }}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.email}>{userData.email}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Basic Information</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Full Name</Text>
                    <Text style={styles.value}>{userData.name}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>{userData.email}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>User ID</Text>
                    <Text style={styles.value}>{userData._id}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Status</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Account Type</Text>
                    <Text style={styles.value}>Standard User</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>Member Since</Text>
                    <Text style={styles.value}>
                        05-April-2025
                    </Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.aboutText}>
                    Welcome to your profile. Keep your details accurate and updated to get the most out of our services.
                </Text>
            </View>

            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f5f5f5",
        flexGrow: 1,
    },
    profileCard: {
        backgroundColor: "#fff",
        borderRadius: 15,
        alignItems: "center",
        paddingVertical: 30,
        marginBottom: 30,
        shadowColor: "#000",
        shadowRadius: 6,
        elevation: 6,
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    email: {
        fontSize: 15,
        color: "#666",
        marginTop: 5,
    },
    section: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: "600",
        color: "#7b241c",
        marginBottom: 15,
    },
    detailRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    label: {
        fontSize: 15,
        color: "#555",
    },
    value: {
        fontSize: 15,
        fontWeight: "500",
        color: "#222",
        maxWidth: "60%",
        textAlign: "right",
    },
    aboutText: {
        fontSize: 14,
        color: "#444",
        lineHeight: 22,
    },
    editButton: {
        backgroundColor: "#7b241c",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 40,
    },
    editText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    error: {
        color: "red",
        fontSize: 16,
    },
});

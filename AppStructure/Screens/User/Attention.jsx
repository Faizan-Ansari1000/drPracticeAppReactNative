import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Attention() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack('Home')}>
                        <MaterialIcon name="cancel" size={24} color={'#7b241c'} />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <MaterialIcon name="check-circle" size={80} color="#4BB543" style={styles.icon} />
                <Text style={styles.title}>Application Submitted Successfully</Text>
                <Text style={styles.subText}>
                    Thank you for choosing our platform. Your appointment request has been submitted.
                    We truly appreciate your trust in our services.
                </Text>
                <View style={styles.divider} />
                <Text style={styles.info}>
                    Our doctors are reviewing your request. You will receive an update via email within the next few days.
                    You can also check the status in the “Appointment Status” section of the app.
                </Text>
                <Text style={styles.tip}>
                    Please stay connected. We wish you a speedy recovery and the best of health!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f2f2f2",
        flexGrow: 1,
        justifyContent: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 25,
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        alignItems: "center",
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 10,
    },
    subText: {
        fontSize: 15,
        color: "#555",
        textAlign: "center",
        marginBottom: 20,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 15,
    },
    info: {
        fontSize: 14,
        color: "#444",
        textAlign: "center",
        marginBottom: 15,
        lineHeight: 22,
    },
    tip: {
        fontSize: 13,
        color: "#777",
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 10,
    },
});

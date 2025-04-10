import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function Home() {

    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 20 }}>
                    <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate('Doctors')}>
                        <Icon name="groups" size={26} color="#581845" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerIcon} onPress={() => setIsOpen(true)}>
                        <MaterialIcon style={{ marginEnd: 20 }} name="menu" size={26} color="#581845" />
                    </TouchableOpacity>
                </View>
            ),
            headerTitleAlign: "center",
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <View>
                <Modal
                    transparent={true}
                    visible={isOpen}
                    animationType="slide"
                    onRequestClose={() => setIsOpen(false)}
                >
                    <View style={styles.overlay}>
                        <View style={styles.modalBox}>
                            <Text style={styles.header}>More Options</Text>

                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Notified')}>
                                <Text style={styles.optionText}>Approvel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AboutApp')}>
                                <Text style={styles.optionText}>About the App</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Support')}>
                                <Text style={styles.optionText}>Contact Support</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('InfoCenter')}>
                                <Text style={styles.optionText}>Info Center</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UpdateForUser')}>
                                <Text style={styles.optionText}>Updates</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Payment')}>
                                <Text style={styles.optionText}>Payment Settings</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Developer')}>
                                <Text style={styles.optionText}>Meet Developer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Profile')}>
                                <Text style={styles.optionText}>Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Setting')}>
                                <Text style={styles.optionText}>Settings</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.option, styles.closeButton]}
                                onPress={() => setIsOpen(false)}
                            >
                                <Text style={[styles.optionText, { color: "#fff" }]}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Search for a doctor..."
                    placeholderTextColor="#888"
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.searchButton}>
                    <MaterialIcon name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Heading for Specialties */}
            <Text style={styles.subHeading}>Most Specialties Doctors</Text>

            {/* Doctor 1 */}
            <View >
                <View style={styles.card}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSlXhRJ5nYXby5_zqvoCCU2sZwfYejCZJUg&s' }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.doctorName}>Cardiologist: Dr. Hamna</Text>
                            <Text style={styles.details}>Days: (TT) Tuesday Thursday</Text>
                            <Text style={styles.details}>Fees: $50</Text>
                            <Text style={styles.details}>Branch: Downtown</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                            <MaterialIcon name="chevron-right" size={28} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Doctor 2 */}
            <View>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://burjeel.com/burjeelmedicalcity/wp-content/uploads/sites/14/2022/10/Dr.-Faraz-Khalid.png' }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.doctorName}>Neurologist: Dr. Faraz</Text>
                            <Text style={styles.details}>Days: (MS) Monday Sunday</Text>
                            <Text style={styles.details}>Fees: $60</Text>
                            <Text style={styles.details}>Branch: City Center</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                            <MaterialIcon name="chevron-right" size={28} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Doctor 3 */}
            <View>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZZMbW8DnKcpoatrfyvrdqLX69mAE-hNCnA&s' }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.doctorName}>Dentist: Dr. Sara</Text>
                            <Text style={styles.details}>Days: (SS) Saturday Sunday</Text>
                            <Text style={styles.details}>Fees: $40</Text>
                            <Text style={styles.details}>Branch: City Center</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                            <MaterialIcon name="chevron-right" size={28} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ margin: 3 }}>
                {/* Section 4 - Featured Hospitals */}
                <Text style={styles.subHeading}>Top Hospitals</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hospitalScroll}>
                    <TouchableOpacity style={styles.hospitalCard}>
                        <Image source={{ uri: 'https://www.thenews.com.pk/assets/uploads/akhbar/2024-12-26/1265553_6902693_JPMC_akhbar.jpg' }} style={styles.hospitalImage} />
                        <Text style={styles.hospitalName}>City Hospital</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hospitalCard}>
                        <Image source={{ uri: 'https://the.akdn/_next/image?url=https%3A%2F%2Fstatic.the.akdn%2F53832%2F1652877569-aku-uganda-hospital.png%3Fw%3D1800%26auto%3Dformat&w=3840&q=75' }} style={styles.hospitalImage} />
                        <Text style={styles.hospitalName}>Metro Care</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Section 5 - Health Tips */}
                <Text style={styles.subHeading}>Health Tips</Text>
                <View style={styles.tipsContainer}>
                    <View style={styles.tipCard}>
                        <Text style={styles.tipText}>Stay Hydrated - Drink at least 8 glasses of water daily.</Text>
                    </View>
                    <View style={styles.tipCard}>
                        <Text style={styles.tipText}>Eat More Vegetables - A balanced diet keeps you healthy.</Text>
                    </View>
                </View>

                {/* Section 6 - Upcoming Appointments */}
                <Text style={styles.subHeading}>Upcoming Appointments</Text>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.doctorName}>Dr. Ahmed (Dermatologist)</Text>
                            <Text style={styles.details}>Date: 5th April</Text>
                            <Text style={styles.details}>Time: 3:00 PM</Text>
                            <Text style={styles.details}>Location: Green Clinic</Text>
                        </View>
                        <MaterialIcon name="chevron-right" size={28} style={styles.icon} />
                    </View>
                </View>

                {/* Section 7 - Pharmacy Services */}
                <Text style={styles.subHeading}>Pharmacy Services</Text>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://media.istockphoto.com/id/1135284188/photo/if-you-need-its-here.jpg?s=612x612&w=0&k=20&c=2yfZHUqTEGW4-5r4Sc4pzWKx0DtubpdbTkX3h_w1AJg=' }} style={styles.image} />
                    <View style={styles.cardContent}>
                        <View>
                            <Text style={styles.doctorName}>Order Medicines Online</Text>
                            <Text style={styles.details}>Home Delivery Available</Text>
                        </View>
                        <MaterialIcon name="chevron-right" size={28} style={styles.icon} />
                    </View>
                </View>

                {/* Section 8 - Emergency Contacts */}
                <Text style={styles.subHeading}>Emergency Contacts</Text>
                <View style={styles.emergencyContainer}>
                    <TouchableOpacity style={styles.emergencyCard}>
                        <MaterialIcon name="local-hospital" size={28} color="#ff4d4d" />
                        <Text style={styles.emergencyText}>Ambulance - 1122</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emergencyCard}>
                        <MaterialIcon name="phone" size={28} color="#ff4d4d" />
                        <Text style={styles.emergencyText}>Medical Helpline - 911</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    headerIcon: {
        padding: 8,
        marginStart: 20
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#fff",
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 4,
        marginStart: 5,
        marginEnd: 5,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5,
        borderRadius: 25,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 15,
        padding: 5,
        marginTop: 5,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    searchButton: {
        padding: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    subHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        marginHorizontal: 20,
        marginTop: 5,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginHorizontal: 20,
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        alignItems: "center",
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    doctorName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    details: {
        fontSize: 14,
        color: "#666",
    },
    icon: {
        color: "#581845",
    },
    hospitalScroll: {
        paddingHorizontal: 10,
    },
    hospitalCard: {
        width: 164,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginRight: 5,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        elevation: 1,
        marginBottom: 10
    },
    hospitalImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    hospitalName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginTop: 5,
    },
    tipsContainer: {
        marginTop: 5,
        paddingHorizontal: 20,
    },
    tipCard: {
        backgroundColor: "#E8F5E9",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    tipText: {
        fontSize: 16,
        color: "#333",
    },
    emergencyContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    emergencyCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    emergencyText: {
        fontSize: 16,
        marginLeft: 10,
        color: "#333",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    modalBox: {
        backgroundColor: "#fff",
        height: "100%",
        width: "70%",
        padding: 20,
        paddingTop: 60,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: -3, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#7b241c",
        marginBottom: 30,
    },
    option: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#ccc",
        paddingVertical: 12,
    },
    optionText: {
        fontSize: 16,
        color: "#333",
    },
    closeButton: {
        backgroundColor: "#7b241c",
        marginTop: 40,
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 12,
    },
});

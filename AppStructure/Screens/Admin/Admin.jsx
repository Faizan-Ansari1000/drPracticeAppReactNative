import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function AdminPanel() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainContent}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.title}>📋 Admin Dashboard</Text>
                    <Text style={styles.subtitle}>Welcome back, manage everything from here</Text>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>👥 User Management</Text>

                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Registered')}>
                            <Text style={styles.cardTitle}>Registered Users</Text>
                            <Text style={styles.cardDesc}>View and manage signed up users</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UserComplain')}>
                            <Text style={styles.cardTitle}>User Complaints</Text>
                            <Text style={styles.cardDesc}>See submitted concerns or issues</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Appointments')}>
                            <Text style={styles.cardTitle}>User Appoitments</Text>
                            <Text style={styles.cardDesc}>See Appotments and send notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('UpdateToUser')}>
                            <Text style={styles.cardTitle}>Updates To User </Text>
                            <Text style={styles.cardDesc}>Notification Update</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>🩺 Doctor Control</Text>

                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('PostDoctor')}>
                            <Text style={styles.cardTitle}>Post a Doctor</Text>
                            <Text style={styles.cardDesc}>Add new doctor profiles to the app</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>📊 Insights & Settings</Text>

                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Reports')}>
                            <Text style={styles.cardTitle}>Generate Reports</Text>
                            <Text style={styles.cardDesc}>Check analytics and data reports</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AdminSetting')}>
                            <Text style={styles.cardTitle}>App Settings</Text>
                            <Text style={styles.cardDesc}>Manage system preferences</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            {/* Bottom Tab Bar */}
            <View style={styles.tabBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.tabItem}>🏠 Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PostDoctor')}>
                    <Text style={styles.tabItem}>➕ Doctor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdminSetting')}>
                    <Text style={styles.tabItem}>⚙️ Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f6f8',
    },
    mainContent: {
        flex: 1,
        paddingBottom: 20,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 15,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 25,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7b241c',
        marginBottom: 12,
        paddingLeft: 5,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 18,
        marginBottom: 12,
        elevation: 3,
        borderLeftWidth: 5,
        borderLeftColor: '#7b241c',
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 4,
    },
    cardDesc: {
        fontSize: 14,
        color: '#7f8c8d',
    },
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#e5e7e9',
        paddingVertical: 13,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        borderRadius: 30,
        padding: 10
    },
    tabItem: {
        fontSize: 16,
        color: '#7b241c',
        fontWeight: '600',
    },
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";


export default function Setting() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    const styles = isDarkMode ? darkStyles : lightStyles;

    const logOut = async () => {
        await AsyncStorage.removeItem('userId')
        navigation.reset({
            index: 0,
            routes: [{ name: 'SignUp' }],
        })
    }

    const openCamera = async () => {
        const result = await launchCamera({ mediaType: 'photo', includeBase64: true })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={openCamera}>
                    <MaterialIcon name="photo-camera" size={24} color={'#7b241c'} />
                </TouchableOpacity>
            )
        })
    }, [navigation])

    return (
        <ScrollView style={styles.container}>
            {/* Profile Section */}
            <View style={styles.section}>
                <Text style={styles.heading}>👤 Profile</Text>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Update Profile Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Change Name</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Change Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Change Password</Text>
                </TouchableOpacity>
            </View>

            {/* App Preferences Section */}
            <View style={styles.section}>
                <Text style={styles.heading}> App Preferences</Text>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Theme: Light / Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Notifications</Text>
                </TouchableOpacity>
            </View>

            {/* Security Section */}
            <View style={styles.section}>
                <Text style={styles.heading}> Security</Text>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Two-Factor Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Enable Face ID / Touch ID</Text>
                </TouchableOpacity>
            </View>

            {/* Help & Support Section */}
            <View style={styles.section}>
                <Text style={styles.heading}> Help & Support</Text>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Support')}>
                    <Text style={styles.optionText}>Contact Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('FAQs')}>
                    <Text style={styles.optionText}>FAQ</Text>
                </TouchableOpacity>

                <Text style={styles.text}>This is {isDarkMode ? 'Dark' : 'Light'} Mode</Text>
                <TouchableOpacity onPress={toggleDarkMode} style={styles.button}>
                    <Text style={styles.buttonText}>Toggle Dark Mode</Text>
                </TouchableOpacity>
            </View>

            {/* Footer Section */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.logoutButton} disabled={loading} onPress={logOut}>
                    {loading ? <ActivityIndicator /> : <Text style={styles.logoutText}>Logout</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        padding: 20,
    },
    section: {
        marginBottom: 30,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    option: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    optionText: {
        fontSize: 18,
        color: '#555',
    },
    text: {
        color: '#333',
        marginTop: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#7b241c',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    footer: {
        marginTop: 40,
        marginBottom: 20,
    },
    logoutButton: {
        padding: 15,
        backgroundColor: '#7b241c',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteButton: {
        padding: 15,
        backgroundColor: '#d9534f',
        borderRadius: 10,
        alignItems: 'center',
    },
    deleteText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

//  Dark Mode Styles
const darkStyles = {
    ...lightStyles,
    container: {
        ...lightStyles.container,
        backgroundColor: '#121212',
    },
    heading: {
        ...lightStyles.heading,
        color: '#fefefe',
    },
    optionText: {
        ...lightStyles.optionText,
        color: '#ddd',
    },
    text: {
        color: '#fefefe',
        marginTop: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#444',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
};

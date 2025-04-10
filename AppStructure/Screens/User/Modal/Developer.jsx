import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default function Developer() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Faizan Navaid Ansari</Text>
                <Text style={styles.role}>React Native Developer</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>👋 About Me</Text>
                <Text style={styles.text}>
                    I'm a passionate React Native developer with experience building stunning, functional, and high-performance mobile applications. I aim to build impactful digital solutions that offer great user experience and make people's lives easier.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>💼 Skills & Expertise</Text>
                <Text style={styles.text}>• React Native (CLI-based, Navigation, Redux)</Text>
                <Text style={styles.text}>• Full-Stack Development: Node.js, Express, MongoDB</Text>
                <Text style={styles.text}>• Firebase & Cloud Firestore Integration</Text>
                <Text style={styles.text}>• REST APIs & Authentication (JWT, OAuth)</Text>
                <Text style={styles.text}>• Beautiful UI/UX Design (Custom Themes)</Text>
                <Text style={styles.text}>• Image Upload, Map Integration, Role-based Navigation</Text>
                <Text style={styles.text}>• Debugging, Performance Optimization, Code Reviews</Text>
                <Text style={styles.text}>• Agile Methodology & Version Control (Git)</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>📱 Apps Developed</Text>
                <Text style={styles.text}>• GlamSphere - Beauty Salon App</Text>
                <Text style={styles.text}>• Micro Finance App</Text>
                <Text style={styles.text}>• Doctor Appointment App</Text>
                <Text style={styles.text}>• E-Commerce App</Text>
                <Text style={styles.text}>• Recipe App</Text>
                <Text style={styles.text}>• Meditation App</Text>
                <Text style={styles.text}>• And many more...</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>📍 Location</Text>
                <Text style={styles.text}>Karachi, Pakistan</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>📞 Contact</Text>
                <Text style={styles.text}>Email: developer@email.com</Text>
                <Text style={styles.text}>Phone: +92-000000000</Text>
                <Text style={styles.text}>Website: www.yourportfolio.com</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>🔗 Social Links</Text>
                <TouchableOpacity>
                    <Text style={styles.link}>LinkedIn</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.link}>GitHub</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.link}>Portfolio</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>📅 Availability</Text>
                <Text style={styles.text}>I am available for remote and full-time opportunities.</Text>
                <Text style={styles.text}>Feel free to reach out if you're looking for a passionate developer!</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.heading}>🎯 Objective</Text>
                <Text style={styles.text}>
                    My goal is to contribute to building impactful and high-quality mobile apps that enhance user experience. I am always eager to learn new technologies and embrace challenging projects.
                </Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Version 1.0.0</Text>
                <Text style={styles.footerText}>© 2025 by Faizan Naviad Ansari</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        padding: 20,
    },
    topSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#7b241c',
    },
    role: {
        fontSize: 18,
        color: '#555',
        marginTop: 5,
    },
    section: {
        marginBottom: 30,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 8,
    },
    link: {
        fontSize: 16,
        color: '#7b241c',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    footer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
    },
    footerText: {
        fontSize: 14,
        color: '#999',
    },
});

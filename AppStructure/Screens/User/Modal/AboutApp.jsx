import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutApp() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>About This App</Text>
                <Text style={styles.subtitle}>
                    Your health is our mission. This app simplifies your access to healthcare services with a touch of technology.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🎯 Purpose</Text>
                <Text style={styles.sectionText}>
                    Designed to help you find top doctors, book appointments, explore hospitals, and get quick emergency contacts — all in one place.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🌟 Key Features</Text>
                <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}> Instant doctor appointments</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}> View doctor profiles & ratings</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}> Explore nearby hospitals</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}> Health articles & tips</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}> Emergency contacts with map support</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>🧑‍💻 Developer Note</Text>
                <Text style={styles.sectionText}>
                    This app is crafted with React Native, focused on delivering a beautiful and realistic UI. Built without extra libraries to ensure performance and stability.
                </Text>
            </View>

            <View style={styles.imageSection}>
                <Image
                    source={{ uri: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.imageCaption}>We’re always here to care for you.</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Version 1.0.0</Text>
                <Text style={styles.footerText}>Developed by: Faizan Ansari</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
        padding: 20,
    },
    header: {
        marginBottom: 25,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        lineHeight: 22,
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34495e',
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 15,
        color: '#555',
        lineHeight: 22,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 6,
    },
    bullet: {
        fontSize: 16,
        color: '#27ae60',
        marginRight: 5,
    },
    listText: {
        fontSize: 15,
        color: '#444',
        flex: 1,
    },
    imageSection: {
        alignItems: 'center',
        marginVertical: 30,
    },
    image: {
        width: '90%',
        height: 190,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    imageCaption: {
        marginTop: 10,
        fontSize: 16,
        color: '#7f8c8d',
        fontStyle: 'italic',
    },
    footer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    footerText: {
        fontSize: 14,
        color: '#95a5a6',
    },
});

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import ApiInstance from '../../../config/APIs/ApiInstance';
import Toast from 'react-native-toast-message';

export default function Support() {

    const [model, setModel] = useState({});
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();

    const sendFeedback = async () => {
        if (!model.email || !model.complain) {
            return Toast.show({ type: 'error', text1: 'Validation error', text2: 'Please Provide are All Fields' })
        }
        if (!model.email.includes('@')) {
            return Toast.show({ type: 'error', text1: '@ is must required' })
        }
        try {
            setLoading(true)
            const res = await ApiInstance.post('/userRoute/complaint', model)
            Toast.show({ type: 'success', text1: 'Submit', text2: 'Your Form has been Successfully Submitted' })
            setLoading(false)
            navigation.navigate('Attention')
        } catch (error) {
            console.log(error)
            Toast.show({ type: 'error', text1: 'Server error', text2: error.message })
            setLoading(false)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>🤝 Need Help?</Text>
                <Text style={styles.headerSubtitle}>
                    We're here to support you 24/7. Contact us any time with your queries or concerns.
                </Text>
            </View>

            <View style={styles.contactCard}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#999" onChangeText={(e) => setModel({ ...model, name: e })} />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#999" onChangeText={(e) => setModel({ ...model, email: e })} keyboardType="email-address" />

                <Text style={styles.label}>Message</Text>
                <TextInput
                    onChangeText={(e) => setModel({ ...model, complain: e })}
                    style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
                    multiline
                    placeholder="Write your message here"
                    placeholderTextColor="#999"
                />

                <TouchableOpacity style={styles.button} onPress={sendFeedback} disabled={loading}>
                    {loading ? <ActivityIndicator size={24} color={'white'} /> :
                        <Text style={styles.buttonText}>Send Message</Text>}
                </TouchableOpacity>
            </View>

            <View style={styles.quickHelp}>
                <Text style={styles.sectionTitle}>📞 Quick Support</Text>
                <TouchableOpacity>
                    <Text style={styles.supportItem}>📱 Call Us: 123-456-789</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.supportItem}>📧 Email: support@example.com</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.supportItem}>💬 WhatsApp: +123456789</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageSection}>
                <Text style={styles.caption}>We’re just a message away — your support matters.</Text>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Response time: within 24 hours</Text>
                <Text style={styles.footerText}>Support available: 24/7</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        padding: 20,
    },
    header: {
        marginBottom: 25,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2E2E2E',
        marginBottom: 10,
    },
    headerSubtitle: {
        fontSize: 15,
        color: '#666',
        lineHeight: 22,
    },
    contactCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#444',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#7b241c',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        color: '#333',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#7b241c',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    quickHelp: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    supportItem: {
        fontSize: 16,
        color: '#7b241c',
        marginBottom: 10,
    },
    imageSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    caption: {
        marginTop: 10,
        fontSize: 15,
        color: '#555',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    footer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    footerText: {
        fontSize: 13,
        color: '#777',
    },
});

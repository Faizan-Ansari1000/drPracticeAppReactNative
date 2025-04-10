import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Payment() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/secure-online-payment-technology_53876-128019.jpg' }}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Secure Payment</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>💳 Select Payment Method</Text>
        <View style={styles.card}>
          <Text style={styles.option}>• Credit / Debit Card</Text>
          <Text style={styles.option}>• Bank Transfer</Text>
          <Text style={styles.option}>• EasyPaisa / JazzCash</Text>
          <Text style={styles.option}>• Cash on Appointment</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>🔒 Your Payment is Secure</Text>
        <Text style={styles.text}>
          We use end-to-end encryption to ensure your transactions are safe and confidential.
          Your card details are never stored and shared.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>🧾 Invoice Summary</Text>
        <View style={styles.summary}>
          <View style={styles.row}>
            <Text style={styles.label}>Doctor Consultation:</Text>
            <Text style={styles.value}>Rs. 1500</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Service Charges:</Text>
            <Text style={styles.value}>Rs. 200</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.labelBold}>Total Payable:</Text>
            <Text style={styles.valueBold}>Rs. 1700</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>📅 Payment Policy</Text>
        <Text style={styles.text}>
          Payments once made are non-refundable unless the appointment is cancelled at least 24 hours in advance.
          For cash on appointment, please pay at the clinic counter after your consultation.
        </Text>
      </View>

      <TouchableOpacity style={styles.payBtn}>
        <Text style={styles.payText}>Proceed to Pay</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Need help? Contact our support at support@yourapp.com</Text>
        <Text style={styles.footerText}>© 2025 YourApp</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    height: 200,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerText: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#7b241c',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 6,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7b241c',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
  },
  option: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  summary: {
    backgroundColor: '#fdfdfd',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    color: '#555',
  },
  value: {
    fontSize: 15,
    color: '#222',
  },
  labelBold: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  valueBold: {
    fontSize: 16,
    color: '#7b241c',
    fontWeight: 'bold',
  },
  payBtn: {
    backgroundColor: '#7b241c',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
});

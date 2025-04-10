import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function InfoCenter() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/hospital-healthcare-service-sale-banner_23-2150394136.jpg' }}
          style={styles.bannerImage}
        />
        <Text style={styles.bannerText}>Information Center</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 What is Info Center?</Text>
        <Text style={styles.sectionText}>
          Info Center is your go-to resource for understanding common health conditions, hospital guides, and emergency awareness. Stay informed and prepared with expert-backed articles and tips.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📚 Health Topics</Text>
        <Text style={styles.bullet}>• Heart Disease: Symptoms & Prevention</Text>
        <Text style={styles.bullet}>• Diabetes Care & Dieting</Text>
        <Text style={styles.bullet}>• Mental Health Awareness</Text>
        <Text style={styles.bullet}>• First Aid in Emergency Situations</Text>
        <Text style={styles.bullet}>• Child Vaccination Schedule</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏥 Hospital Guides</Text>
        <Text style={styles.sectionText}>
          Learn how to choose the right hospital, understand basic services, insurance support, and how to prepare for a hospital visit.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚑 Emergency Tips</Text>
        <Text style={styles.bullet}>• When to call emergency</Text>
        <Text style={styles.bullet}>• Home remedies for quick relief</Text>
        <Text style={styles.bullet}>• Storing emergency contacts</Text>
        <Text style={styles.bullet}>• What to do in case of burns, falls, or shocks</Text>
      </View>

      <View style={styles.imageBox}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/doctor-consulting-patient-hospital-office_53876-15056.jpg' }}
          style={styles.image}
        />
        <Text style={styles.caption}>Your Health Knowledge Hub</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>All content is verified and sourced from reliable health institutions.</Text>
        <Text style={styles.footerText}>© 2025 YourApp. All rights reserved.</Text>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7b241c',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  bullet: {
    fontSize: 15,
    color: '#333',
    marginBottom: 6,
    paddingLeft: 10,
  },
  imageBox: {
    alignItems: 'center',
    marginVertical: 30,
  },
  image: {
    width: '90%',
    height: 180,
    borderRadius: 10,
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
    color: '#7b241c',
    fontStyle: 'italic',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
    marginBottom: 4,
  },
});

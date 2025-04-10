import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FAQs() {
  const faqData = [
    {
      question: '1. How do I book a doctor appointment?',
      answer:
        'Go to the Home screen, tap on a doctor, view their details, and press the "Book Now" button. Then select your preferred date and time.',
    },
    {
      question: '2. Can I cancel or reschedule my appointment?',
      answer:
        'Yes. Go to your Profile > Appointments section. Tap the appointment you want to modify and choose to either cancel or reschedule.',
    },
    {
      question: '3. How do I contact customer support?',
      answer:
        'You can reach out to us through the Support screen found in the Settings section. You can also email us directly at help@healthapp.com.',
    },
    {
      question: '4. Is my personal information safe?',
      answer:
        'Absolutely. We take user privacy seriously. All your data is encrypted and stored securely using industry-standard protocols.',
    },
    {
      question: '5. How do I change my password?',
      answer:
        'Go to Settings > Profile > Change Password. Enter your current password, then your new password and confirm it.',
    },
    {
      question: '6. Are online consultations available?',
      answer:
        'Yes, we offer online consultations with selected doctors. Look for the "Online Available" label while choosing a doctor.',
    },
    {
      question: '7. Can I save favorite doctors?',
      answer:
        'Yes. On any doctor’s profile, tap the heart icon to add them to your favorites. You can view all saved doctors under your Profile.',
    },
    {
      question: '8. How do I update my medical history?',
      answer:
        'Navigate to your Profile > Medical History. You can add, edit, or delete past medical records and prescriptions.',
    },
    {
      question: '9. What payment methods are supported?',
      answer:
        'We support credit/debit cards, mobile wallets, and bank transfers. You’ll be able to choose your method during checkout.',
    },
    {
      question: '10. Is the app available in multiple languages?',
      answer:
        'Yes! You can change the language under Settings > App Preferences > Language. We support English, Urdu, Arabic, and more.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>❓ Frequently Asked Questions</Text>

      {faqData.map((faq, index) => (
        <View key={index} style={styles.faqBox}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  faqBox: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  answer: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
  },
  bottomSpace: {
    height: 40,
  },
});

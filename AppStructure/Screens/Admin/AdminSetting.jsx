import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function AdminSetting() {
  return (
    <ScrollView style={styles.container}>

      {/* Admin Header */}
      <View style={styles.adminHeader}>
        <Image
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/012/210/707/non_2x/worker-employee-businessman-avatar-profile-icon-vector.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.adminInfo}>
          <Text style={styles.adminName}>Admin</Text>
          <Text style={styles.adminRole}>Super Admin</Text>
          <Text style={styles.adminEmail}>admin@adminpanel.com</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logsBtn}>
            <Text style={styles.btnText}>View Logs</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* System Controls */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>System Controls</Text>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Manage Users</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Server Status</Text>
          <Text style={styles.arrow}>Stable ›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>View Reports</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>API Keys</Text>
          <Text style={styles.arrow}>Generated ›</Text>
        </TouchableOpacity>
      </View>

      {/* Data & Storage */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data & Storage</Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Backup Data</Text>
          <Text style={styles.toggleStyle}>Enabled</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Storage Usage</Text>
          <Text style={styles.arrow}>12.5 GB / 100 GB</Text>
        </View>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Error Logs</Text>
          <Text style={styles.arrow}>View ›</Text>
        </TouchableOpacity>
      </View>

      {/* Account & Security */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account & Security</Text>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Change Password</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>2FA Authentication</Text>
          <Text style={styles.toggleStyle}>OFF</Text>
        </View>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Account Access Logs</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* App Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Preferences</Text>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Theme</Text>
          <Text style={styles.arrow}>Dark ›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Language</Text>
          <Text style={styles.arrow}>English ›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <Text style={styles.settingLabel}>Notification Settings</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>System</Text>
        <TouchableOpacity style={styles.settingRow}>
          <Text style={[styles.settingLabel, { color: '#c0392b', fontWeight: 'bold' }]}>
            Logout Admin Panel
          </Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Admin Settings v1.0 | All Rights Reserved ©</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 15,
  },
  adminHeader: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 25,
    alignItems: 'center',
    elevation: 3,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  adminInfo: {
    alignItems: 'center',
    marginBottom: 12,
  },
  adminName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  adminRole: {
    fontSize: 14,
    color: '#7b241c',
    marginVertical: 2,
  },
  adminEmail: {
    fontSize: 13,
    color: '#7f8c8d',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  editBtn: {
    backgroundColor: '#7b241c',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  logsBtn: {
    backgroundColor: '#34495e',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#7b241c',
    marginBottom: 12,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  settingLabel: {
    fontSize: 14,
    color: '#2c3e50',
  },
  toggleStyle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7b241c',
  },
  arrow: {
    fontSize: 15,
    color: '#7b241c',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#999',
    marginTop: 30,
    marginBottom: 15,
  },
});

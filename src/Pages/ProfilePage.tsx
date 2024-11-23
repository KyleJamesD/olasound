'use client';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import MainPageBanner from '../components/kyle/MainPageBanner';

function ProfilePage({ navigation, route }: { navigation: any; route: any }): React.JSX.Element {
  const [username, setUsername] = useState('stellarnova');
  const [email, setEmail] = useState('stella@nova.com');
  const [isEditing, setIsEditing] = useState(false); // check if it is editing
  const [tempUsername, setTempUsername] = useState(username); // Temporary username for editing
  const [tempEmail, setTempEmail] = useState(email); // Temporary email for editing

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSave = () => {
    // check if form is empty
    if (tempUsername.trim() === '' || tempEmail.trim() === '') {
      Alert.alert('Error', 'Username and email cannot be empty.');
      return;
    }
    // check email format
    if (!validateEmail(tempEmail)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Save changes
    setUsername(tempUsername);
    setEmail(tempEmail);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Revert temporary changes to the original values
    setTempUsername(username);
    setTempEmail(email);
    setIsEditing(false);
  };

  return (
    <View style={styles.container1}>
      {/* Profile Header */}
      <MainPageBanner title="Profile" msg="Feel free to show yourself" />

      {/* Account Info */}
      {!isEditing && (
        <View style={styles.container2}>
          <View style={styles.accountInfo}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/res/head.jpg')}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.infoTitle}>Account Info</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>User Name</Text>
              <Text style={styles.infoValue}>{username}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{email}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Joined</Text>
              <Text style={styles.infoValue}>March 2023</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Subscription</Text>
              <Text style={styles.infoValue}>Premium</Text>
            </View>
          </View>

          {/* Edit Profile Button */}
          <Pressable
            style={styles.editButton}
            onPress={() => {
              setTempUsername(username); // Sync temporary state with current state
              setTempEmail(email);
              setIsEditing(true);
            }}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>

          {/* Log Out Button */}
          <Pressable
            style={styles.logoutButton}
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </Pressable>
        </View>
      )}

      {/* editing profile */}
      {isEditing && (
        <View style={styles.editModal}>
          <Text style={styles.infoTitle}>Edit Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter new username"
            value={tempUsername}
            onChangeText={setTempUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter new email"
            value={tempEmail}
            onChangeText={setTempEmail}
          />
          <Pressable
            style={styles.saveButton}
            onPress={handleSave} // save and exit editing profile
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
          <Pressable
            style={styles.cancelButton}
            onPress={handleCancel} // cancel editing
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container2:{
    padding: 20,
  },
  imageContainer:{
    justifyContent:'center',
    alignContent:'center',
    margin:'auto',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginTop:20,
  },
  accountInfo: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop:20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    backgroundColor: '#3b5a77',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editModal: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#3b5a77',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  cancelText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    borderColor: '#3b5a77',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  logoutText: {
    color: '#3b5a77',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;

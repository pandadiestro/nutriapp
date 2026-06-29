import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";

import { useProfile } from "../../src/viewmodels/useProfile";

export default function ProfileScreen() {
  const {
    name,
    setName,
    email,
    setEmail,
    darkTheme,
    notifications,
    saveProfile,
    toggleTheme,
    toggleNotifications,
  } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={saveProfile}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Guardar cambios
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text>Modo oscuro</Text>
          <Switch
            value={darkTheme}
            onValueChange={toggleTheme}
          />
        </View>

        <View style={styles.row}>
          <Text>Notificaciones</Text>
          <Switch
            value={notifications}
            onValueChange={toggleNotifications}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1A5276",
  },

  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  label: {
    marginTop: 10,
    marginBottom: 4,
    color: "#333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#148F77",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

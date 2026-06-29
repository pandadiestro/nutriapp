import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageService = {
  async saveUserProfile(name, email) {
    await AsyncStorage.setItem(
      "profile",
      JSON.stringify({ name, email })
    );
  },

  async getUserProfile() {
    const value =
      await AsyncStorage.getItem("profile");

    return value
      ? JSON.parse(value)
      : { name: "", email: "" };
  },

  async setDarkTheme(value) {
    await AsyncStorage.setItem(
      "darkTheme",
      JSON.stringify(value)
    );
  },

  async isDarkTheme() {
    const v =
      await AsyncStorage.getItem("darkTheme");

    return v ? JSON.parse(v) : false;
  },

  async setNotifications(value) {
    await AsyncStorage.setItem(
      "notifications",
      JSON.stringify(value)
    );
  },

  async getNotifications() {
    const v =
      await AsyncStorage.getItem(
        "notifications"
      );

    return v ? JSON.parse(v) : true;
  },
};

export default StorageService;

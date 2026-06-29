import { useState, useEffect, useCallback } from "react";
import StorageService from "../services/storageService";

export function useProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const loadProfile = useCallback(async () => {
        const profile =
            await StorageService.getUserProfile();

        setName(profile?.name || "");
        setEmail(profile?.email || "");

        setDarkTheme(
            await StorageService.isDarkTheme()
        );

        setNotifications(
            await StorageService.getNotifications()
        );
    }, []);

    const saveProfile = useCallback(async () => {
        await StorageService.saveUserProfile(
            name,
            email
        );
    }, [name, email]);

    const toggleTheme = useCallback(async () => {
        const newValue = !darkTheme;

        setDarkTheme(newValue);

        await StorageService.setDarkTheme(
            newValue
        );
    }, [darkTheme]);

    const toggleNotifications =
        useCallback(async () => {
            const newValue = !notifications;

            setNotifications(newValue);

            await StorageService.setNotifications(
                newValue
            );
        }, [notifications]);

    useEffect(() => {
        loadProfile();
    }, [loadProfile]);

    return {
        name,
        setName,
        email,
        setEmail,
        darkTheme,
        notifications,
        saveProfile,
        toggleTheme,
        toggleNotifications,
    };
}

import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context"

import { useFonts } from "expo-font";
import { SplashScreen,Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { colors, fonts } from "@/constants";
import Icon from "@components/Icon";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded, fontError] = useFonts(fonts);

    useEffect(() => { (fontsLoaded || fontError) && SplashScreen.hideAsync() }, [fontsLoaded, fontError]);
    if (!fontsLoaded && !fontError) return null;

    return (
        <SafeAreaView style={{ backgroundColor: colors.BACKGROUND_PRIMARY, flex: 1 }}>
            <StatusBar style="light" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: colors.BACKGROUND_SECONDARY, borderTopWidth: 0, height: 48 },
                    tabBarActiveTintColor: colors.ACCENT_ALT,
                    tabBarInactiveTintColor: colors.TEXT_MUTED,
                    tabBarLabelStyle: { fontFamily: "Mojangles" },
                }}
                sceneContainerStyle={{ backgroundColor: colors.BACKGROUND_PRIMARY }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: () => <Icon icon="CraftingTable" />
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: () => <Icon icon="RedstoneLamp" />
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}

import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import { Colors, Fonts } from "@/constants";
import { BottomTabRoutes } from "@/routes";
import Icon from "@components/Icon";

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

export default function App() {
    const [fontsLoaded, fontError] = useFonts(Fonts);

    useEffect(() => { (fontsLoaded || fontError) && SplashScreen.hideAsync() }, [fontsLoaded, fontError]);
    if (!fontsLoaded && !fontError) return null;

    return (
        <NavigationContainer>
            <SafeAreaView style={{ backgroundColor: Colors.BACKGROUND_PRIMARY, flex: 1 }}>
                <StatusBar style="light" />
                <Tab.Navigator
                    sceneContainerStyle={{ backgroundColor: Colors.BACKGROUND_PRIMARY }}
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: { backgroundColor: Colors.BACKGROUND_SECONDARY, borderTopWidth: 0, height: 48 },
                        tabBarActiveTintColor: Colors.ACCENT_ALT,
                        tabBarInactiveTintColor: Colors.TEXT_MUTED,
                        tabBarLabelStyle: { fontFamily: "Mojangles" },
                    }}
                >
                    {BottomTabRoutes.map((route) => (
                        <Tab.Screen
                            key={route.name}
                            name={route.name}
                            component={route.component}
                            options={{
                                tabBarIcon: () => <Icon icon={route.icon} />
                            }}
                        />
                    ))}
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}


registerRootComponent(App);

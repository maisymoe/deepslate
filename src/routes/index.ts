import Home from "@routes/Home";
import Settings from "@routes/Settings";

export const BottomTabRoutes: BottomTabRoute[] = [
    {
        name: "Home",
        component: Home,
        icon: "CraftingTable",
    },
    {
        name: "Settings",
        component: Settings,
        icon: "RedstoneLamp",
    }
]

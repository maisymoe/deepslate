interface Route {
    name: string;
    component: React.ComponentType;
}

interface BottomTabRoute extends Route {
    icon: keyof typeof import("@/constants").Icons;
}

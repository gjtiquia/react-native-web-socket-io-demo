import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HelloWorld } from "src/components"

const Main = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    return (
        <SafeAreaProvider>
            <View className="flex-1 flex-row justify-center items-center">
                <Text>{"Is Mounted: "}</Text>
                <Text>{isMounted ? "True" : "False"}</Text>
            </View>
        </SafeAreaProvider>
    );
}

export { Main }
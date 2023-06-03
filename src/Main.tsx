import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HelloWorld } from "src/components"

const Main = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [apiData, setApiData] = useState<any>({ "state": "loading" });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const HOSTNAME = "Gershoms-MBP"; // Temporary during development
        const PORT = 8080;

        const response = await fetch(`http://${HOSTNAME}:${PORT}`);
        const data = await response.json();

        setApiData(data);
        setIsMounted(true);
    }

    return (
        <SafeAreaProvider>
            <View className="flex-1 justify-center items-center">
                <View className="flex flex-row">
                    <Text>{"Is Mounted: "}</Text>
                    <Text>{isMounted ? "True" : "False"}</Text>
                </View>
                <Text>{JSON.stringify(apiData)}</Text>
            </View>
        </SafeAreaProvider >
    );
}

export { Main }
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { HelloWorld } from "src/components"

const Main = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [apiData, setApiData] = useState<any>({ "state": "loading" });

    useEffect(() => {
        console.log("Fetching...");

        // fetch("http://localhost:8080") // Not working, maybe need to set up cors?
        fetch("https://random-data-api.com/api/v2/users?size=2")
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                setIsMounted(true)
            })
            .catch(response => console.error(response));
    }, []);

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
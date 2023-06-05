import { useEffect, useState } from "react";
import { View, Text, Button, Linking } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"

import { socket, URL } from "src/socket";

const Main = () => {
    const [socketID, setSocketID] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [serverResponse, setServerResponse] = useState("");

    useEffect(() => {
        const onConnect = () => {
            console.log(`Connected to server! Socket ID: ${socket.id}`)

            setSocketID(socket.id);
            setIsConnected(true);
        }

        const onDisconnect = () => {
            console.log(`Disconnected from server!`)

            setSocketID("");
            setIsConnected(false);
            setServerResponse("");
        }

        const onServerResponse = (value: any) => setServerResponse(value);

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("serverResponse", onServerResponse);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("serverResponse", onServerResponse);
        }
    }, []);

    const onClickHandler = () => {
        socket.emit("clickMeEvent");
    }

    return (
        <SafeAreaProvider>
            <View className="flex-1 justify-center items-center gap-4">
                <Text className="font-bold text-xl">React Native Web + Socket.io Demo</Text>

                <View className="flex items-center">
                    <Text>{"Socket URL: "}</Text>
                    <Text className="text-xs">{URL}</Text>
                </View>
                <View className="flex flex-row">
                    <Text>{"Socket ID: "}</Text>
                    <Text>{socketID}</Text>
                </View>
                <View className="flex flex-row">
                    <Text>{"Is Connected: "}</Text>
                    <Text>{isConnected ? "True" : "False"}</Text>
                </View>
                <View className="flex flex-row">
                    <Text>{"Server Response: "}</Text>
                    <Text>{serverResponse}</Text>
                </View>

                <View className="flex flex-row">
                    <Text>{"process.env.NODE_ENV: "}</Text>
                    <Text>{process.env.NODE_ENV}</Text>
                </View>

                <View>
                    <Button title="Click Me" onPress={onClickHandler} />
                </View>

                <View className="flex items-center">
                    <Text>{"GitHub: "}</Text>
                    <Text
                        className="text-xs text-blue-500"
                        onPress={() => Linking.openURL('https://github.com/gjtiquia/react-native-web-socket-io-demo')}
                    >
                        {"https://github.com/gjtiquia/react-native-web-socket-io-demo"}
                    </Text>
                </View>
            </View>
        </SafeAreaProvider >
    );
}

export { Main }
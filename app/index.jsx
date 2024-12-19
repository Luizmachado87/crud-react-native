import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { userRouter } from 'expo-router';
import { useState } from "react";
import firebase from "../firebase";

const App = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cpf, setCpf] = useState("")

    const router = userRouter()

    const handle = async () => {
        const User = await firebase.firestore().collection("People").add({
            name: name,
            lastName: lastName,
            cpf: cpf,
        })

        alert(`User has been created ${User.id}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Crie o seu usuário:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="lastName"
                    onChangeText={text => setLastName(text)}
                    value={lastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="cpf"
                    onChangeText={text => setCpf(text)}
                    value={cpf}
                />
            </View>
            <Viwe style={styles.buttons}>
                <Pressable style={styles.button} onPress={handle}>
                    <Text style={styles.buttonText}>Create</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => router.push("/list")}>
                    <Text style={styles.buttonText}>View Lists</Text>
                </Pressable>

            </Viwe>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
        gap: 40
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '65%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    buttons: {
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#007AFF',
        justifyContent: "center",
        borderRadius: 5,
        alignItems: 'center',
        width: "35%",
        aspectRatio: 2.10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default App;

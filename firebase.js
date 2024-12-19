import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyAnjilFeRdCeHyvcbAil01uD9wTF8idH_k",
    authDomain: "crudreactnative-40bd7.firebaseapp.com",
    projectId: "crudreactnative-40bd7",
    storageBucket: "crudreactnative-40bd7.firebasestorage.app",
    messagingSenderId: "574124964957",
    appId: "1:574124964957:web:e012ddb82f50f28154e1b4"
};

// Nesta condição caso tenha uma conexão ele irá exportar o Firebase, do contrário será criado uma conexão nova.
if (!firebase.apps.length) {
    console.log(`Conectando...  Status:${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig);
    console.log(`Conectado! ${firebase.apps.length}`);
}

export default firebase;
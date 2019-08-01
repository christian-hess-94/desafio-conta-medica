import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhvUhWkjwtq_YS-3PQFP3hHDMqQNqXtSI",
    authDomain: "desafio-conta-medica.firebaseapp.com",
    databaseURL: "https://desafio-conta-medica.firebaseio.com",
    projectId: "desafio-conta-medica",
    storageBucket: "desafio-conta-medica.appspot.com",
    messagingSenderId: "974230132168",
    appId: "1:974230132168:web:fc2910711bd27608"
};

firebase.initializeApp(firebaseConfig);

//Constantes com contexto de conexão para os serviços do firebase
export const firebaseAuth = firebase.auth(); //Contexto de autenticação
export const firebaseFirestore = firebase.firestore(); //Contexto do banco firestore

export default firebase;
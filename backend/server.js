import { initializeApp } from "firebase/app";
const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyB60rXqOs2WuO_Sa4rSbabAjh6kccwG2-Y",
  authDomain: "tear-system.firebaseapp.com",
  projectId: "tear-system",
  storageBucket: "tear-system.appspot.com",
  messagingSenderId: "167425157602",
  appId: "1:167425157602:web:0d152536885b72c3bd31bb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referencia = await setDoc(doc(db, nomeTabela, id), dado);
        const dadoSalvo = {
            ...dado,
            id: id
        }
        return dadoSalvo;
    } else {
        const referencia = await addDoc(collection(db, nomeTabela), dado);
        const dadoSalvo = {
            ...dado,
            id: referencia.id
        }
        return dadoSalvo;
    }
}

async function buscar(nomeTabela) {
    const tabelaReferencia = collection(db, nomeTabela);

    const q = query(tabelaReferencia);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const dado = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(dado);
    });
    return lista;
}

async function buscarPorId(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("ERRO!");
    }
}
async function remover(nomeTabela, id) {
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deletado!`
    }
}

module.exports = {
    salvar,
    buscar,
    buscarPorId,
    remover
}
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
    apiKey: "AIzaSyBx6jqQeNr_9QxnqbdSGFHsNQhEgHoyO2Y",
    authDomain: "freeze-day.firebaseapp.com",
    projectId: "freeze-day",
    storageBucket: "freeze-day.appspot.com",
    messagingSenderId: "919754769882",
    appId: "1:919754769882:web:99dd09f824b43ca2052ce3",
    measurementId: "G-EW1PB6KS2C"
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
    return Promise.resolve(lista);
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

async function buscarComFiltro(nomeTabela, operador, nomeDado, dado) {
    const tableRef = collection(db, nomeTabela);
    const q = query(tableRef, where(nomeDado, operador, dado));
    const data = await getDocs(q)

    const lista = [];

    data.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    })

    return lista;
}

module.exports = {
    salvar,
    buscar,
    buscarPorId,
    buscarComFiltro,
    remover
}
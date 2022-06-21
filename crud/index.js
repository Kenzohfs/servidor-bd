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
    apiKey: "AIzaSyAzwbRP1nZK8x1Wup0UenlfomX-weVKz0Q",
    authDomain: "first-database-access-kenzo.firebaseapp.com",
    projectId: "first-database-access-kenzo",
    storageBucket: "first-database-access-kenzo.appspot.com",
    messagingSenderId: "534447036960",
    appId: "1:534447036960:web:2ceffec9b979bffd607a45",
    measurementId: "G-T3JSXCVQQ8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
//Collection = tabela
//Estamos declarando q essa função é assíncrona, retornando assim uma Promise
async function save(nomeTabela, id, dado) {
    if (id) {
        const referencedEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referencedEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            //Estamos jogando todas as propriedades da variável dado para o savedData
            //Semelhante a dizer savedData = dado; Mas nesse caso as duas variáveis estariam
            //apontando para o mesmo objeto
            //Do jeito com reticências, as duas variáveis vão estar apontando para referências diferentes
            ...dado,
            id: referencedEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    })

    return lista;
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Not found!");
    }
}

async function remove(nomeTabela, id) {
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deleted!`
    }
}
//Comandos q foi pedido print:
//firebase login
//firebase init
//firebase deploy

module.exports = {
    save,
    get,
    getById,
    remove
}
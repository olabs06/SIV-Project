import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc, addDoc } from 'firebase/firestore';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyC02DNy7W9sCQbqf_ZCSYwjaE_rza-segE",
    authDomain: "siv-backend.firebaseapp.com",
    projectId: "siv-backend",
    storageBucket: "siv-backend.appspot.com",
    messagingSenderId: "1077559267650",
    appId: "1:1077559267650:web:b88f19cf985e8b9f1fb8db",
    measurementId: "G-L7HEYZP45E"
});

const auth = getAuth(firebaseApp);



onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log ('logged in!');
    } else {
        console.log('No user');
    }
});


// Init firebase app
//***initializeApp(firebaseApp)

// Init services
const db = getFirestore(firebaseApp);
//db.collection('Portugal').getDocs();
// const todosCol = collection(db, 'todos');
// const snapshot = await getDocs(todosCol);


//collection ref
const colRef = collection(db, 'Portugal');



//get collection data
getDocs(colRef)
    .then((snapshot) => {
        let Portugal = []
        snapshot.docs.forEach((doc) => {
        Portugal.push({ ...doc.data(), id: doc.id })
        })
        console.log(Portugal)
    })
    .catch(err =>{
        console.log(err.message)
    })

// adding documents
// const addPortugalForm = document.querySelector('.add')
// addPortugalForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     addDoc(colRef, {
//         location: addPortugalForm.location.value,
//         city: addPortugalForm.city.value,
//         NGO: addPortugalForm.NGO.value,
//         organization: addPortugalForm.organization.value,
//         website: addPortugalForm.website.value,
//         email: addPortugalForm.email.value,
//         OID: addPortugalForm.OID.value,
//         description: addPortugalForm.description.value,
//         members: addPortugalForm.members.value

//     })
    
//     .then(() =>{
//         addPortugalForm.reset()
//     })
// })

// //deleting documents
// const deletePortugalForm = document.querySelector('.delete')
// deleteBookForm.addEventListener('submit', (e) => {
//     e.preventDefault()
// })
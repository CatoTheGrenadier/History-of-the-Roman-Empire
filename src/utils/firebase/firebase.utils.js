import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDhR7RAejU32SMubNF1s4BnTeQbC3UjP7w",
    authDomain: "rome-650a1.firebaseapp.com",
    projectId: "rome-650a1",
    storageBucket: "rome-650a1.appspot.com",
    messagingSenderId: "876936503840",
    appId: "1:876936503840:web:b4250f32e289191f98d245"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (file) => {
    const batch = writeBatch(db)

    file.forEach((era) => {
        const eraDocRef = doc(db, 'eras', era.id)
        batch.set(eraDocRef, {
            title: era.title,
            time: era.time,
            imageUrl: era.imageUrl,
            route: era.route,
            brief: era.brief
        })

        era.emperors.forEach((emperor) => {
            const emperorDocRef = doc(db, 'eras', era.id, 'emperors', emperor.id.toString())
            batch.set(emperorDocRef,{
                full_name:emperor.full_name,
                imageUrl: emperor.imageUrl,
                reign: emperor.reign,
                route: emperor.route,
                short_name: emperor.short_name,
            })
        })
    })
    
    await batch.commit()
}

export const getErasAndDocuments = async () => {
    const collectionRef = collection(db, 'eras')
    const q = query(collectionRef)
    
    const querySnapshot = await getDocs(q)
    const erasMap = {}

    for (const docSnapshot of querySnapshot.docs) {
        const { title, time, imageUrl, route, brief } = docSnapshot.data();
        const id = docSnapshot.id;

        // Fetch emperors for each era
        const emperorsRef = collection(db, 'eras', id, 'emperors');
        const emperorsQuerySnapshot = await getDocs(emperorsRef);

        const emperors = emperorsQuerySnapshot.docs.map((emperorDoc) => {
            const emperorData = emperorDoc.data();
            return { id: emperorDoc.id, ...emperorData };
        });

        erasMap[id] = { title, time, imageUrl, route, emperors, brief };
    }

    return erasMap;
};
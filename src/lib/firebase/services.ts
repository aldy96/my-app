import {collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
    }));

    return data;
}  

// This file contains functions to interact with Firebase Firestore, specifically to retrieve data from a specified collection.
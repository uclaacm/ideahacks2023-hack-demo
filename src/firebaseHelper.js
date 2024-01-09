import db from "./firebase";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";

const COLLECTION_NAME = "runs"

export async function getCollectionDocs(setFunction) {
	const collectionRef = collection(db, COLLECTION_NAME);
	const snapshot = await getDocs(collectionRef);

	const docs = []
	snapshot.forEach(doc => docs.push(doc.data()));

	setFunction(docs);
}

export async function getMyDocs(name, setFunction) {
	const collectionRef = collection(db, COLLECTION_NAME);
	const queryRef = await query(collectionRef, where('person', '==', name));
	const snapshot = await getDocs(queryRef);

	const docs = []
	snapshot.forEach(doc => docs.push(doc.data()));
	
	setFunction(docs);
}

export async function createNewDoc(document) {
	const collectionRef = collection(db, COLLECTION_NAME);
	const newDocRef = await addDoc(collectionRef, document);
}
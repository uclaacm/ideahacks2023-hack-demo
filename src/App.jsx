import React, { useState } from 'react';
import './App.css';
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
	async function getCollectionDocs(collectionName) {
		const collectionRef = collection(db, collectionName);
		const snapshot = await getDocs(collectionRef);
		if (snapshot.empty) {
		  console.log('No matching documents.');
		  return;
		}  
		
		snapshot.forEach(doc => {
		  console.log(doc.id, '=>', doc.data());
		});
	}

	async function getDocByName(collectionName, documentName) {
		const docRef = doc(db, collectionName, documentName);
		const snapshot = await getDoc(docRef);
		if (snapshot.empty) {
		  console.log('No matching documents.');
		  return null;
		}  

    	const data = snapshot.data();
		console.log(data);
	}

	return (
		<div>
			<h1>Strovo</h1>
			<p>A completely original idea for a running mileage tracker</p>
			<p>To be implemented :)</p>

			<button onClick={() => getCollectionDocs('animals')}>Print Docs...</button>
		</div>
	);
}

export default App;

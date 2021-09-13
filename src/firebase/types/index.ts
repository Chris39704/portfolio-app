import type firebase from "..";
import type {  DocumentReference, DocumentData  } from 'firebase/firestore/lite';

export type FirebaseApp = firebase.FirebaseApp;

export type IDocRef = DocumentReference<DocumentData>;
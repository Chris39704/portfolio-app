import { FbApp } from '..';
import { getFirestore } from 'firebase/firestore/lite';
import type { FirebaseApp } from '../types';

export const setupFirestore = (app: FirebaseApp) => {
    const firestore = getFirestore(app);
    return firestore;
  };


export const firestore = setupFirestore(FbApp());
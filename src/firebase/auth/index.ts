import { getAuth } from 'firebase/auth';
import { FbApp } from '..';
import type { FirebaseApp } from '../types'

export const initAuth = (app: FirebaseApp) => {
    const auth = getAuth(app);
    return auth;
  };


export const auth = initAuth(FbApp());

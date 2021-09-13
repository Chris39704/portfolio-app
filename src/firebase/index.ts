import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { fbConfig } from './config';

export const FbApp = () => {
  const isInitialized = firebase.getApps().length > 0;
  if (!isInitialized) {
    return firebase.initializeApp(fbConfig);
  } else {
    return firebase.getApps()[0];
  }
};

const app = FbApp();
const analytics = getAnalytics(app);

export default firebase;
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { fbConfig } from "./config";

export const FbApp = () => {
  const isInitialized = getApps().length > 0;
  if (!isInitialized) {
    return initializeApp(fbConfig);
  } else {
    return getApps()[0];
  }
};

const app = FbApp();
const analytics = getAnalytics(app);

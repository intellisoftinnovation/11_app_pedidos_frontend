// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const initialize = (
  FIREBASE_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MSG_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBF95ZzAUILGpzhr2TSgn-NXwK0YQOSIew",
    authDomain: "dinospedidos.firebaseapp.com",
    projectId: "dinospedidos",
    storageBucket: "dinospedidos.firebasestorage.app",
    messagingSenderId: "573243150729",
    appId: "1:573243150729:web:12624225775e0e18545158",
    measurementId: "G-3008QNHZ4D"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)
  const messaging = getMessaging(app)
  return messaging
}
export const isFirebaseSupported = async() => {
  return await isSupported()
}

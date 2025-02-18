// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here, other Firebase libraries
// // are not available in the service worker.
importScripts(
    "https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js"
 );
 importScripts(
    "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js"
 );
// // Initialize the Firebase app in the service worker by passing in the
// // messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyBF95ZzAUILGpzhr2TSgn-NXwK0YQOSIew",
    authDomain: "dinospedidos.firebaseapp.com",
    projectId: "dinospedidos",
    storageBucket: "dinospedidos.firebasestorage.app",
    messagingSenderId: "573243150729",
    appId: "1:573243150729:web:12624225775e0e18545158",
    measurementId: "G-3008QNHZ4D"
});


// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
    try {
        console.log('onBackgroundMessage')
        // Customize notification here
        const { title, body } = payload.notification;
        console.log('title', title, body)
        const notificationOptions = {
           body,
           icon: "/favicon.png",
        };
     
        // eslint-disable-next-line no-restricted-globals
        self.registration.showNotification(title, notificationOptions); 
    } catch (error) {
        console.log('error', error)
    }
    
 });
 
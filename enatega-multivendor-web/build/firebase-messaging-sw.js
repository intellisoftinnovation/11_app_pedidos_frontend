/* eslint-disable no-undef */
importScripts(
  "https://www.gstatic.com/firebasejs/9.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging-compat.js"
);
const app = firebase.initializeApp({
  apiKey: "AIzaSyBF95ZzAUILGpzhr2TSgn-NXwK0YQOSIew",
  authDomain: "dinospedidos.firebaseapp.com",
  projectId: "dinospedidos",
  storageBucket: "dinospedidos.firebasestorage.app",
  messagingSenderId: "573243150729",
  appId: "1:573243150729:web:12624225775e0e18545158",
  measurementId: "G-3008QNHZ4D"
});
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  const { title, body } = payload.notification;
  const notificationOptions = {
    body,
    icon: "/favicon.png",
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(title, notificationOptions);
});

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBnEUpXM9p1dMDVlhov2GektoNhY-cKd4A',
  authDomain: 'vuex-firebase-auth-52bfc.firebaseapp.com',
  projectId: 'vuex-firebase-auth-52bfc',
  storageBucket: 'vuex-firebase-auth-52bfc.appspot.com',
  messagingSenderId: '949243870225',
  appId: '1:949243870225:web:24a0c201074edf207605b0'
};

// init firebase
initializeApp(firebaseConfig);

// init auth
const auth = getAuth();

export { auth };

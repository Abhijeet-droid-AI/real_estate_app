// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDOI2x2xY-mXW7xVbK0OAXZrSARpCfBSoM',
	authDomain: 'loginauth-c1710.firebaseapp.com',
	projectId: 'loginauth-c1710',
	storageBucket: 'loginauth-c1710.appspot.com',
	messagingSenderId: '63124974890',
	appId: '1:63124974890:web:23448b81cee33805d20253',
	measurementId: 'G-N6ZWC65VNH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};

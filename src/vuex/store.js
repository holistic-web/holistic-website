import firebase from 'firebase';
import Cookies from 'js-cookie';
import VuexPersistence from 'vuex-persist';
import authStore from './modules/authStore';

// Firebase connection. Since this info is public it's important to have security rules set.
const firebaseConfig = {
	apiKey: 'AIzaSyCBSeq7wRNRQQYZnxZGYt35P-6-yHvwXIg',
	authDomain: 'asdsa-48c2f.firebaseapp.com',
	databaseURL: 'https://asdsa-48c2f.firebaseio.com',
	projectId: 'asdsa-48c2f',
	storageBucket: 'asdsa-48c2f.appspot.com',
	messagingSenderId: '92593551317'
};

// Create a persisted state cookie
const vuexCookie = new VuexPersistence({
	restoreState: key => Cookies.getJSON(key),
	saveState: (key, state) => Cookies.set(key, state, {
		expires: 3
	}),
	modules: ['auth'] // only save user module
});

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();

const store = {
	state: {
		firebase,
		db
	},
	modules: {
		auth: authStore
	},
	plugins: [
		vuexCookie.plugin
	]
};

export default store;


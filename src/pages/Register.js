import React, {useEffect, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import '../App.css';

import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import {app} from '../firebase';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const auth = getAuth(app);
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				// ...
			}
		});

		return unsub;
	}, []);

	const register = (e) => {
		const auth = getAuth(app);
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				alert('You have been Registered');

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('An Error Occured');
				// ..
			});
	};
	return (
		<div className="text-center m-5-auto">
			<h2>Join us</h2>
			<h5>Create your personal account</h5>
			<form
				action="/home"
				onSubmit={(e) => {
					e.preventDefault();
					register();
				}}
			>
				<p>
					<label>Email address</label>
					<br />
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</p>
				<p>
					<label>Password</label>
					<br />
					<input
						type="password"
						name="password"
						// two way binding
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</p>

				<p>
					<button id="sub_btn" type="submit">
						Register
					</button>
				</p>
			</form>
			<footer>
				<p>
					<Link to="/login">Have an account ? Login</Link>.
				</p>
			</footer>
		</div>
	);
}

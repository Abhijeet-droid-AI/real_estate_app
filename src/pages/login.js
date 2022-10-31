import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../App.css';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function SignInPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signin = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				alert('Signed In');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('Error logging in');
			});
	};
	return (
		<div className="login-cont text-center m-5-auto">
			<h2>Sign in to us</h2>
			<form
				action="/home"
				onSubmit={(e) => {
					e.preventDefault();
					signin();
				}}
			>
				<p>
					<label>Username or email address</label>
					<br />
					<input
						type="text"
						name="first_name"
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</p>
				<p>
					<label>Password</label>
					<Link to="/forget-password">
						<label className="right-label">Forget password?</label>
					</Link>
					<br />
					<input
						type="password"
						name="password"
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</p>
				<p>
					<button id="sub_btn" type="submit">
						Login
					</button>
				</p>
			</form>
			<footer>
				<p>
					First time? <Link to="/register">Create an account</Link>.
				</p>
			</footer>
		</div>
	);
}

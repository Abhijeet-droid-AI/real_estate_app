import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import logo from '../images/logo.svg';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {app} from '../firebase';
export default class Navbar extends Component {
	state = {
		isOpen: false,
		loggedin: false,
	};
	handleToggle = () => {
		this.setState({isOpen: !this.state.isOpen});
	};

	componentDidMount = () => {
		const auth = getAuth(app);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				this.setState((prev) => ({...prev, loggedin: true}));
				// ...
			} else {
				// User is signed out
				// ...
				this.setState((prev) => ({...prev, loggedin: false}));
			}
		});
	};

	logout() {
		const auth = getAuth(app);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				alert('Signed Out');
			})
			.catch((error) => {
				// An error happened.
				alert('Error Signing out');
			});
	}
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img
								className="saleLogo"
								src={logo}
								alt="House Sale"
							/>
						</Link>
						<button
							type="button"
							className="nav-btn"
							onClick={this.handleToggle}
						>
							<FaAlignRight className="nav-icon" />
						</button>
					</div>
					<ul
						className={
							this.state.isOpen
								? 'nav-links show-nav'
								: 'nav-links'
						}
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/rooms">Houses</Link>
						</li>

						{this.state.loggedin ? (
							<li>
								<button
									onClick={() => {
										this.logout();
									}}
								>
									Logout
								</button>
							</li>
						) : (
							<li>
								<Link to="/login">Account</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		);
	}
}

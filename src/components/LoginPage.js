import blogsService from "../services/blogs";
import loginService from "../services/login";
import SignIn from "./signIn";

const LoginPage = (props) => {
	const handleLogin = async (event) => {
		event.preventDefault();

		console.log("handle login :");
		console.log("username = ", props.username);
		console.log("password = ",props.password);
		try {
			const user = await loginService.login({
				username: props.username, password: props.password
			});

			window.localStorage.setItem(
				"loggedUser", JSON.stringify(user)
			);
			blogsService.setToken(user.token);
			props.setUser(user);
			props.setUsername("");
			props.setPassword("");
		} catch (e) {
			props.setNotifSeverity(1);
			props.setNotif(true);
			props.setNotifMessage("Incorrect username or password");
		}
	};

	return (
		<>
			{props.notifMessage !== null && props.notification()}
			<SignIn
				username={props.username}
				setUsername={props.setUsername}
				password={props.password}
				setPassword={props.setPassword}
				handleLogin={handleLogin}
			/>
		</>
	);
};
export default LoginPage;
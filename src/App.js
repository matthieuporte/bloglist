import "./style/style.css";

import { useState, useEffect } from "react";
import * as React from "react";
import BlogCard from "./components/BlogCard";
import blogService from "./services/blogs";
import loginService from "./services/login";
import MyDrawer from "./components/drawer";
import LoginPage from "./components/LoginPage";
import Notification from "./components/Notification";
import Button from "@mui/material/Button";

const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [notifMessage, setNotifMessage] = useState(null);
	const [notifSeverity, setNotifSeverity] = useState(1); //1error 2warning 3info 4success
	const [notif, setNotif] = useState(false);
	const [username, setUsername] = useState("jonero6");
	const [password, setPassword] = useState("motdepasse");
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [user, setUser] = useState(null);

	useEffect(() => {
		blogService.getAll().then(blogs =>
			setBlogs( blogs )
		);
	}, []);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("loggedUser");
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			blogService.setToken(user.token);
		}
	}, []);

	const notification = () => (
		<Notification message={notifMessage} severity={notifSeverity} notif={notif} setNotif={setNotif}/>
	);

	const loginPage = () => (
		<LoginPage
			username={username}
			password={password}
			setUsername={setUsername}
			setPassword={setPassword}
			notification={notification}
			notifMessage={notifMessage}
			setUser={setUser}
			setNotifMessage={setNotifMessage}
			setNotif={setNotif}
			setNotifSeverity={setNotifSeverity}
		/>
	);

	const blogsPage = () => (
		<div>
			<h1>Welcome {user.name}</h1>
			<MyDrawer
				url={url}
				title={title}
				setUrl={setUrl}
				setTitle={setTitle}
				setBlogs={setBlogs}
			/>
			<Button variant="text" onClick={() => {window.localStorage.clear();location.reload();}}>Log out</Button>
			{notifMessage !== null && notification()}
			<h2>blogs</h2>
			{blogs.map(blog =>
				<BlogCard key={blog.id} blog={blog} />
			)}
		</div>
	);

	return (
		<div>
			{user === null ?
				loginPage() :
				blogsPage()
			}
		</div>
	);
};

export default App;
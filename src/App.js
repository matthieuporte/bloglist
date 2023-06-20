import "./style/style.css";

import { useState, useEffect } from "react";
import BlogCard from "./components/BlogCard";
import blogService from "./services/blogs";
import loginService from "./services/login";
import MyDrawer from "./components/drawer";
import LoginPage from "./components/LoginPage";
import Notification from "./components/Notification";


const App = () => {
	const [blogs, setBlogs] = useState([]);
	const [notifMessage, setNotifMessage] = useState(null);
	const [notifSeverity, setNotifSeverity] = useState(1); //1error 2warning 3info 4success
	const [notif, setNotif] = useState(false);
	const [username, setUsername] = useState("jonero6");
	const [password, setPassword] = useState("motdepasse");
	//const [title, setTitle] = useState("Frontend post !!!!");
	//const [url, setUrl] = useState("youtube.com");
	const [user, setUser] = useState(null);

	useEffect(() => {
		blogService.getAll().then(blogs =>
			setBlogs( blogs )
		);
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
			<MyDrawer />
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
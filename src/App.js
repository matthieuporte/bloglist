import "./style/style.css";

import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import MyDrawer from "./components/drawer";

const App = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		blogService.getAll().then(blogs =>
			setBlogs( blogs )
		);
	}, []);

	return (
		<div>
			<MyDrawer />
			<h2>blogs</h2>
			{blogs.map(blog =>
				<Blog key={blog.id} blog={blog} />
			)}
		</div>
	);
};

export default App;
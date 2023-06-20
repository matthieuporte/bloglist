const Blog = ({blog}) => {
	return (
		<div>
			<span className="bold">{blog.title}</span> from {blog.user.username}
		</div>
	);
};

export default Blog;
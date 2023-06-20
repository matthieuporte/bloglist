import * as React from "react";
import blogsServices from "../services/blogs";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import {green} from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import blogService from "../services/blogs";

const MyDrawer = (props) => {
	const [state, setState] = React.useState({left: false});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const addBlog = (event) => {
		event.preventDefault();
		const blogObject = {
			title: props.title,
			url: props.url,
		};

		blogsServices
			.create(blogObject)
			.then(returnedPost => {
				blogService.getAll().then(blogs =>
					props.setBlogs( blogs )
				);
				props.setTitle("");
				props.setUrl("");
			});
	};



	const content = () => (
		<Box
			sx={{ width: 450 }}
			role="creation"
		>

			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: green[500] }}>
						<AddCircleIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Create a blog post
					</Typography>
					<Box component="form" onSubmit={addBlog} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="title"
							label="Title"
							value={props.title}
							name="title"
							autoComplete="title"
							autoFocus
							onChange={({ target }) => props.setTitle(target.value)}
						/>
						<TextField
							margin="normal"
							fullWidth
							name="url"
							label="url"
							type="url"
							value={props.url}
							id="url"
							autoComplete="url"
							onChange={({ target }) => props.setUrl(target.value)}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Create
						</Button>

					</Box>
				</Box>
			</Container>
		</Box>
	);

	return (
		<div>
			{["left"].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>Create a blog post</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{content()}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
};

export default MyDrawer;
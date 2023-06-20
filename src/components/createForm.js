import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { green } from "@mui/material/colors";



const CreateForm = (props) => {


	return (
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
				<Box component="form" onSubmit={handleCreation} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="title"
						label="Title"
						value={title}
						name="title"
						autoComplete="title"
						autoFocus
						onChange={({ target }) => setUsername(target.value)}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="url"
						label="url"
						type="url"
						value={url}
						id="url"
						autoComplete="url"
						onChange={({ target }) => setPassword(target.value)}
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
	);
};

export default CreateForm;
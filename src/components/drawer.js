
import CreateForm from "./createForm";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const MyDrawer = ({username,setUsername,password,setPassword}) => {
	const [state, setState] = React.useState({left: false});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const content = () => (
		<Box
			sx={{ width: 450 }}
			role="creation"
		>

			<CreateForm

			/>
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
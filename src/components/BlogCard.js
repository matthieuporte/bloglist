import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const BlogCard = ({blog}) => {
	return (
		<Card className="blogCard" variant="outlined">
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    19/06/23
				</Typography>
				<Typography variant="h5" component="div">
					{blog.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{blog.user.username}
				</Typography>
				<Typography variant="body2">
                    likes : {blog.likes}
				</Typography>
				<CardActions>
					<Button size="small" href="https://youtube.com">Read whole article</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default BlogCard;
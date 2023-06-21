import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard";
import userEvent from "@testing-library/user-event";


const SampleBlog = () => {
	return {
		title: "Test blog post",
		url: "internet.com",
		user:{
			username: "Jean-Marc"
		},
		likes:0,
	};
};

test("renders content", () => {
	render(<BlogCard blog={SampleBlog()} />);

	const element = screen.getByText("Test blog post");
	expect(element).toBeDefined();
});


test("another way of thesting redering of content", () => {
	const { container } = render(<BlogCard blog={SampleBlog()} />);

	// print content to the console
	//screen.debug();
	//screen.debug(container);

	const div = container.querySelector(".blogCard");
	expect(div).toHaveTextContent(
		"Test blog post"
	);
});

/*
test('clicking the button calls event handler once', async () => {
	const mockHandler = jest.fn()

	render(
		<Note note={note} toggleImportance={mockHandler} />
	)

	const user = userEvent.setup()
	const button = screen.getByText('make not important')
	await user.click(button)

	expect(mockHandler.mock.calls).toHaveLength(1)
})*/

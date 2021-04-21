import * as React from 'react';
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import UserList, { constant} from "./UserList";

it("render wihtout crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("render loading text when users is not defined", () => {
    const { getByText } = render(<UserList />);
    const loading = getByText(constant.LOADING_TEXT);

    expect(loading).toBeInTheDocument();
})

it("renders error when failed to fetch", async () => {
    const ERROR = "fetching ERROR"
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.reject(new Error(ERROR));
    })

    const { findByText } = render(<UserList />)
    const errorMsg = await findByText(ERROR);

    expect(errorMsg).toBeInTheDocument();
})

it("render list of users after fetching", async () => {
    // Arrange
    const fakeData = [1,2,3,4,5,6].map(id => ({
        id,
        email: `user=${id}@gmail.com`,
        first_name: "User",
        last_name: `#${id}`,
        avatar: `//picsum.photos/150?image=${id}`
    }))
    const fakeResult = {data: fakeData}

    // Override fetch method to return virtual data instead of api data
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(fakeResult)
        })
    })

    // Act
    const {findByAltText, findByText} = render(<UserList />);

    // Assert
    for (let index = 0; index < fakeData.length; index++) {
        const fakeUser = fakeData[index];
        const userFullname = `${fakeUser.first_name} ${fakeUser.last_name}`;
        const avatar = await findByAltText(userFullname);
        const fullName = await findByText(userFullname);
        const email = await findByText(fakeUser.email);

        // has correct avatar
        expect(avatar).toBeInTheDocument();
        // has correct full name
        expect(fullName).toBeInTheDocument();
        // has correct email
        expect(email).toBeInTheDocument();
    }
})
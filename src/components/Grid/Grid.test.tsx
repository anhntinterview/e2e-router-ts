import * as React from 'react';
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import Grid from "./Grid";

it('render without crashing', () => {
    // Arrange: INPUT
    const div = document.createElement('div')
    // Act: ACTION
    ReactDOM.render(<Grid/>, div);
    ReactDOM.unmountComponentAtNode(div)
    // Assert: OUTPUT is not available. Cause default is not throw exception. It means success
})

it('render children', () => {
    // Arrange & Act: chilren is <h1>Content</h1>
    // Action: always is render()
    const { getByText } = render(<Grid><h1>Content</h1></Grid>)
    const children = getByText('Content');
    // Assert
    expect(children).toBeInTheDocument();
})


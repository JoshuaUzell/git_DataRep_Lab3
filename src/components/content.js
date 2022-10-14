import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div> //Draws out Hello World onto the page as well as the current time
                <div className="App">
                    <h1>Hello World</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            </div>
        );
    }
}

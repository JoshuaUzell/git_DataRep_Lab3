import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="App"> {//Displays message saying we are in the header component}
                    <h1>My Header in another component</h1>
                </div>
            </div>
        );
    }
}

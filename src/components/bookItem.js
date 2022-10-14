import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
            {/*This displays info on the books by retrieving object info from the books array 
            including the book title, the book image and the name of the author*/}
                <div className="App">
                    <Card>
                        <Card.Header>{this.props.book.title}</Card.Header>
                    </Card>
                    
                    <img src={this.props.book.thumbnailUrl}></img>
                    <h6>{this.props.book.authors[0]}</h6>
                
                </div>
            </div>
        );
    }
}

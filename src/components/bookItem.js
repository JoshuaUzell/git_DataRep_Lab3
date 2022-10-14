import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
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
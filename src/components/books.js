import React from "react";
import { BookItem } from "./bookItem";

export class Books extends React.Component {
    render() {
        {/*Creates a map for the books array and displays info from Book Item*/}
        return this.props.books.map(
            (book) => {
                return <BookItem book={book} key={book.isbn}></BookItem>
            } 
        );
    }
}

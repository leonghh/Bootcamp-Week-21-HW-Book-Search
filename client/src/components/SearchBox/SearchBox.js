import React, { useState } from 'react';
import * as API from "../../utils/API";
import BookResults from "../BookResults/BookResults"
import "./style.css"

function SearchBox() {
    const [keyword, setKeyword] = useState();
    const [books, setBooks] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const handleClick = e => {
        e.preventDefault();
        API.getBooks(keyword)
            .then((res) => {
                setBooks(res)
                setErrorMsg("");
            })
            .catch((err) => {
                setErrorMsg("Error in accessing Google's Book API.");
            });
    }

    // Execute Search by Enter Key 
    const handleKeyPress = e => {
        if (e.key === "Enter") {
            handleClick(e);
        }
    }
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h2>Book Search</h2>
                <div className="form-group">
                    <input type="text" className="form-control" name="keyword"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <button type="submit" className="btn btn-dark" onClick={handleClick}>Search</button>
                <div>{errorMsg}</div>
            </div>
            <div className="jumbotron resultJumbo">
                {books.map((book, index) => {
                    return <BookResults key={index} data={book} />
                })}
            </div>
        </div>
    )
}


export default SearchBox;
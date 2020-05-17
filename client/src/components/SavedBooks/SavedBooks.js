import React, { useState, useEffect } from 'react';
import BookResults from '../BookResults/BookResults';
import * as API from '../../utils/API';

function SavedBooks() {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const [renderList, setRenderList] = useState(false);

    useEffect(()=> {
        API.getSavedBooks()
        .then((res)=>{
            setBooks(res);
            setIsLoaded(true);
            setRenderList(false); // Need to reset after useEffect runs 
        })
        .catch((err)=>{
            setIsLoaded(true);
            setIsError(true);
            setRenderList(false); // Need to reset after useEffect runs
        });
    },[renderList]);

    // This is called when "Delete" button is clicked.
    function triggerRenderList() {
        setRenderList(true); // Setting true invokes rendering Book List
    }

    if (isError) { 
        return (
        <div className="container">
            Error while getting saved book.
        </div>
        )
    } else if (!isLoaded) {
        return (
        <div className="container">
            Please wait while getting saved data from heroku.<p/>
        </div>
        )
    } else if (isLoaded) {
        return (
            <div className="container mt-5">
                {books.map((book, index)=>{
                   return <BookResults key={index} data={book} deleteButton={true} triggerRenderList={triggerRenderList}/>
                })}
            </div>
        )    
    }

}

export default SavedBooks;

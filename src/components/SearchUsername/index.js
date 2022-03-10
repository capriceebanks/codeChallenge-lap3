import React, { useState } from "react";

const SearchUsername = ({ setUsername }) => {
    const [nameInput, setNameInput] = useState("");

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        setNameInput("");
    };
    return (
        <>
            <div id="form-container" className="search p-4 d-flex justify-content-center text-light">
                <form className="column align-items-centre g-3" onSubmit={handleFormSubmit}>
                    <label id="form" htmlFor="username">GitHub Username: </label><br/>
                    <input type="text" id="username" name="username" placeholder="Enter username here" value={nameInput} onChange={handleInput} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
        </>
    )

};



export default SearchUsername;

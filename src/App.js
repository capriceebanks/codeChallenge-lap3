import React, { useState } from "react";
import { Repositories, SearchUsername, NavBar } from "./components";
import './App.css';

function App() {
    const [username, setUsername] = useState("");

    return (
        <>
            <NavBar />
            <SearchUsername setUsername={setUsername} />
            <div id="text-container" className="text-light">
                <h3 aria-label="Form" id="Form">
                    {" "}
                    Hi {username ? username : "user"}, your repositories are:
                </h3>
                <Repositories username={username} />
            </div>
        </>
    );
}

export default App;

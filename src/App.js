import React, { useState } from "react";
import { Repositories, SearchUsername } from "./components";

function App() {
    const [username, setUsername] = useState("");

    return (
        <>
            <SearchUsername setUsername={setUsername} />
            <div id="text-container">
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

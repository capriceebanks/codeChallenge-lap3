import React from 'react';

const UserListing = ({user}) => {
    return (
        <section className="user">
            <div className="user-info">
            <a href={user.html_url} target="_blank">
                <h1>{user.login}</h1>
            </a>
             
            </div>
        </section>
    )
}

export default UserListing;
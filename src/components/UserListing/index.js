import React from 'react';

const UserListing = ({user}) => {
    return (
        <section className="user">
            <div className="user-info">
            <a className='text-decoration-none text-light' href={user.html_url} target="_blank">
                <h1>All Repos</h1>
            </a>
             
            </div>
        </section>
    )
}

export default UserListing;

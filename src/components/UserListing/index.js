import React from 'react';

const UserListing = ({user}) => {
    return (
        <section className="user">
            <div className="user-info">
            <a className='text-decoration-none text-light' href={user.html_url} target="_blank">
                <button className='btn btn-outline-light mb-3'>All Repos</button>
            </a>
             
            </div>
        </section>
    )
}

export default UserListing;

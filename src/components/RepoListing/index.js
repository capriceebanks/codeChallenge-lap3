import React from 'react';

const RepoListing = ({ repo }) => {
    return (
        <div className="repo">
            <div className="repo-info">
                <a href={repo.html_url} target="_blank">
                    <h2>{repo.name}</h2>
                </a>
            </div>
        </div>
    )
}

export default RepoListing;
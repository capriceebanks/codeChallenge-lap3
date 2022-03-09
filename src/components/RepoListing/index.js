import React from 'react';

const RepoListing = ({ repo }) => {
    return (
        <div className="repo">
            <div className="repo-info">
                <a href={repo.html_url} target="_blank">
                    <h2>{repo.name}</h2>
                </a>
            </div>
            <div className="repo-details">
                <div className="forks">
                    forks: <span>{ repo.forks_count}</span>
                </div>
                <div className="stargazers">
                    stargazers: <span>{ repo.stargazers_count}</span>
                </div>
                <div className="issues">
                    issues: <span>{ repo.open_issues_count}</span>
                </div>
            </div>
        </div>
    )
}

export default RepoListing;
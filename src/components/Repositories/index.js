import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserListing from '../UserListing';
import RepoListing from '../RepoListing';


const url = "https://api.github.com"

const Repositories = ({ username }) => {

    const [repos, setRepos] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser = async () => {
            try {
                const {data} = await axios.get(`${url}/users/${username}`);
                setUser(data);
            } catch (error) {
                setUser();
                console.error(error);
            }
        }
        const getRepos = async () => {
            try {
                const {data} = await axios.get(`${url}/users/${username}/repos`);
                setRepos(data);
            } catch (error) {
                setUser();
                console.error(error);
            }
        }

        getUser();
        getRepos();
    }, [username]);

    const repositories = Array.isArray(repos) && repos.map(repo => <RepoListing repo={repo} />);

    return (
        <section className="user-repos text-light">
            {user && <UserListing user={user} />}
            {repositories}
        </section>
    )

}


export default Repositories;

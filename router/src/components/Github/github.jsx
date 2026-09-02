import React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/aniteshkarak')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4">

            <div className="w-full max-w-md rounded-3xl border border-gray-700 bg-gray-900/80 p-8 text-white shadow-2xl backdrop-blur-md">

                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={data.avatar_url}
                        alt="Github Avatar"
                        className="h-32 w-32 rounded-full border-4 border-gray-700 object-cover shadow-xl transition duration-300 hover:scale-105 hover:border-blue-500"
                    />
                </div>

                {/* Name */}
                <div className="mt-6 text-center">
                    <h1 className="text-3xl font-bold">
                        {data.name || 'Loading...'}
                    </h1>

                    <p className="mt-2 text-gray-400">
                        @{data.login || 'github-user'}
                    </p>

                    {/* Bio */}
                    {data.bio && (
                        <p className="mt-4 text-sm leading-6 text-gray-300">
                            {data.bio}
                        </p>
                    )}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3">

                    <div className="rounded-2xl bg-gray-800 p-4 text-center transition hover:bg-gray-700">
                        <p className="text-2xl font-bold text-white">
                            {data.followers || 0}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            Followers
                        </p>
                    </div>

                    <div className="rounded-2xl bg-gray-800 p-4 text-center transition hover:bg-gray-700">
                        <p className="text-2xl font-bold text-white">
                            {data.following || 0}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            Following
                        </p>
                    </div>

                    <div className="rounded-2xl bg-gray-800 p-4 text-center transition hover:bg-gray-700">
                        <p className="text-2xl font-bold text-white">
                            {data.public_repos || 0}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            Repos
                        </p>
                    </div>

                </div>

                {/* GitHub Button */}
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 block rounded-xl bg-white py-3 text-center font-semibold text-gray-900 transition hover:bg-gray-200 hover:shadow-lg"
                >
                    View GitHub Profile →
                </a>

            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aniteshkarak');
    return response.json();
}
// src/app/person/[id]/page.jsx

import React from 'react';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const url = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      return { notFound: true }; // Return a 404 page if fetch fails
    }
    const profile = await res.json();

    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    return { notFound: true }; // Return a 404 page in case of any errors
  }
}

const PersonPage = ({ profile }) => {
  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w200${profile.profile_path}`}
            alt={profile.name}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-2">
          {profile.name}
        </h1>
        <p className="text-center text-gray-600 mb-4">
          {profile.place_of_birth}
        </p>
        <div className="flex flex-col items-center">
          <a
            href={`https://www.imdb.com/name/${profile.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mb-2"
          >
            IMDb Profile
          </a>
          <span className="text-gray-600">
            Popularity: {profile.popularity.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;

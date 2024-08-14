"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import LoadingSkeleton from "./LoadingSkeleton";

const ArtistList = ({ title, description }) => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArtists(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading)
    return (
      <p>
        <LoadingSkeleton />
      </p>
    );
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="max-w-[1440px] w-full mx-auto my-0 p-6 overflow-hidden">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-base sm:text-lg mb-4">{description}</p>
      )}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-center items-center">
        {artists.slice(0, 8).map((artist) => (
          <li
            key={artist.id}
            className="flex flex-col items-center justify-between text-center rounded-full"
            onClick={() => {
              router.push(`/person/${artist.id}`);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${artist.profile_path}`}
              alt={artist.name}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full mb-2 shadow-md"
            />
            <p className="text-xs sm:text-sm md:text-base font-semibold">
              {artist.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ArtistList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ArtistList;

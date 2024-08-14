import React from "react";
import Celebs from "./Celebs";
import { Awards } from "./Awards";
import Community from "./Community";
import Movies from "./Movies";
import TvShows from "./TvShows";

const Modals = ({ Open, close }: { Open: boolean; close: () => void }) => {
  if (!Open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg mt-8 z-60">
        <div className="flex gap-6 flex-wrap">
          <Celebs />
          <Awards />
          <Community />
          <Movies />
          <TvShows />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => close()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modals;

import React from "react";

import TopRated from "./components/TopRated";
import ArtistList from "./components/ArtistList";
import WhatTowatch from "./components/WhatTowach";
import Suggestion from "./components/Suggestion";
import TopBoxOffice from "./components/TopBoxOffice";
import TopNews from "./components/TopNews";
import Footer from "./components/Footer";
import UpNext from "./components/UpNext";

export default function Home() {
  return (
    <div>
      <main className="w-[90%] overflow-x-hidden mx-auto">
        <div>
          <TopRated />
          <UpNext />
          <ArtistList title="Born Today" description="People Born August 10" />
          <WhatTowatch />
          <Suggestion title="Top 10 this Week" seed={25} />
          <Suggestion
            title="Fan Favourite"
            description="This week's top TV and movies"
            seed={87}
          />
          <Suggestion title="Popular Interest" seed={10} />
          <Suggestion title="Exclusive Videos" seed={30} />
          <Suggestion title="Explore What's Streaming" seed={50} />
          <TopBoxOffice />
          <Suggestion title="Coming Soon To the Theatre" seed={6} />
          <Suggestion title="Explore More" seed={9} />
          <ArtistList title="Most popular celebrities" description="" />
          <TopNews />
        </div>
      </main>
      <Footer />
    </div>
  );
}

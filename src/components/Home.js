import Search from "./Search";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Home() {
  const madeForYou = useRef(null);
  const recently = useRef(null);
  const arr = [
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
  ];

  const slideLeft = (frame, offset) => {
    console.log(`slideLeft`);
    frame.current.scrollLeft -= offset;
  };

  const slideRight = (frame, offset) => {
    console.log(`slideRight`);
    frame.current.scrollLeft += offset;

  };
  return (
    <div style={{ gridArea: "main" }} className="col-span-2 mt-5 mx-5">
      <div className="flex flex-nowrap justify-between">
        <div style={{ width: "20rem" }}>
          <Search placeholder="Search" />
        </div>
        <div className="flex items-center">
          <span className="font-bold text-sm mr-3">Abdellatif Douz</span>
          <div className="w-8">
            <img
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/40642579?v=4"
            />
          </div>
        </div>
      </div>
      <div className="my-8">
        <span className="text-4xl font-bold">Home</span>
      </div>
      <div className="flex flex-nowrap justify-between my-4">
        <span className="text-lg font-bold">Made for you</span>
        <div>
          <span style={{ opacity: "0.5" }}>
            <Button onClick={() => slideLeft(madeForYou, 300)} type="icon-round">
              <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
            </Button>
          </span>
          <Button onClick={() => slideRight(madeForYou, 300)} type="icon-round">
            <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
          </Button>
        </div>
      </div>
      <div
        ref={madeForYou}
        className="grid gap-8 justify-items-center mb-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(17rem,1fr))",
          gridAutoFlow: "column",
          overflow: "hidden",
          scrollBehavior: 'smooth'
        }}
      >
        {arr.map((e, i) => (
          <div key={i} style={{ minWidth: "17rem", position: "relative" }}>
            <Button type="play">
              <FontAwesomeIcon style={{ fontSize: '1rem' }} className="text-xs" icon={faPlay} />
            </Button>
            <img
              className="rounded-xl img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={e}
            ></img>
          </div>
        ))}
      </div>
      <div className="flex flex-nowrap justify-between my-4">
        <span className="text-lg font-bold">Recently played</span>
        <div>
          <span style={{ opacity: "0.5" }}>
            <Button onClick={() => slideLeft(recently, 240)} type="icon-round">
              <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
            </Button>
          </span>
          <Button onClick={() => slideRight(recently, 240)} type="icon-round">
            <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
          </Button>
        </div>
      </div>
      <div
        ref={recently}
        className="grid gap-8 justify-items-center mb-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(13rem,1fr))",
          gridAutoFlow: "column",
          overflow: "hidden",
          scrollBehavior: 'smooth'
        }}
      >
        {arr.map((e, i) => (
          <div key={i} style={{ minWidth: "13rem", position: "relative" }}>
            <Button type="play">
              <FontAwesomeIcon style={{ fontSize: '1rem' }} className="text-xs" icon={faPlay} />
            </Button>
            <img
              className="rounded-xl img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={e}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

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
    "https://i.scdn.co/image/ab67616d0000b27312a76d1b13ef07188f7dfbc9",
    "https://dailymix-images.scdn.co/v2/img/36b83ed541c5cdc2233ade1afe744daa6c77441e/1/en/default",
    "https://i.scdn.co/image/ab67706f0000000237adef96c979b8c88c3c741c",
    "https://i.scdn.co/image/ab67706f00000002ce8b084d8c5328cc5138d80f",
    "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
    "https://newjams-images.scdn.co/v3/discover-weekly/08499kuTdxipJ-cfVbEAQIWg5Vy6T8WCv_Ir8exMT02fjk9Hm1LGZVmGv0Uzg3Lb92ECWf8LruD8trLBkfI7JfPQzyPoc0KFIsUw5uFlVw4TKlswBndDP5TEBnTPdcqz1nP_-vEm8Rc7dL-p9NqsJ81L3z0skqe45I9M3jhOYF6RkWF1VKnLQqdO-C0qIrdOx6L8e4O4oTRsf03gqOFOfkYNYZbB0FZDvmlpRHtcLob8bbRZHpjxWqiNvVOWkz0U1Y-gYjeLfZGAjX7dvpQkcnyNxiJVIqGjAGkYk2bprxPXXQRxsW150_hRaGQRPUsEDeOSAVd-e1ZOaqmIfmxnTS19j1bY7dZgLXYE880yOTk=/NjI6OTA6MDBUMzEtNTAtMQ==/default",
    "https://i.scdn.co/image/ab67706f000000025af8bbbc55211e1031c0bb32",
    "https://i.scdn.co/image/ab67706f00000002fc8804444b151c7ef8fa9528",
    "https://i.scdn.co/image/ab67706f0000000298acdce7d57c6242e76d33a4",
    "https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-en.jpg",
    "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en.jpg",
    "https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind2_DEFAULT-en.jpg",
    "https://lineup-images.scdn.co/summer-rewind-2020_DEFAULT-en.jpg",
    "https://misc.scdn.co/liked-songs/liked-songs-300.png"

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
          <div className="playlistcover" key={i} style={{ minWidth: "17rem", position: "relative" }}>
            <Button type="play">
              <FontAwesomeIcon style={{ fontSize: '1rem' }} className="text-xs" icon={faPlay} />
            </Button>
            <img
              className="rounded-xl img"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={e}
            ></img>
            <div className="TitleBackground" />
            <div className="playlistTitle">
              <p style={{ fontWeight: 'bold', color: 'white' }}>Title of the playlist</p>
              <span style={{ fontSize: '.8rem', color: 'rgb(255,255,255,.7)' }}>Title of the playlist</span>
            </div>
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
          <div className="playlistcover" key={i} style={{ minWidth: "13rem", position: "relative" }}>
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

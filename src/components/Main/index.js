import Navbar from "./Navbar";
import Covers from "./Covers";
import PlaylistHeader from "./PlaylistHeader";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: "col-span-2 mt-5 ml-5",
})`
  grid-area: main;
`;

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
    "https://misc.scdn.co/liked-songs/liked-songs-300.png",
  ];

  const changeMFY = (value) => {
    madeForYou.current.scrollLeft += value;
  };

  const changeRP = (value) => {
    recently.current.scrollLeft -= value;
  };

  return (
    <Wrapper>
      <Navbar
        name="Abdellatif Douz"
        avatar="https://avatars.githubusercontent.com/u/40642579?v=4"
      />
      <div className="my-8">
        <span className="text-4xl font-bold">Home</span>
      </div>
      <PlaylistHeader title="Made for you" changeScroll={changeMFY} />
      <Covers ref={madeForYou} playlists={arr.slice(0).reverse()} />
      <PlaylistHeader title="Recently played" changeScroll={changeRP} />
      <Covers ref={recently} playlists={arr} />
    </Wrapper>
  );
}

export default Home;

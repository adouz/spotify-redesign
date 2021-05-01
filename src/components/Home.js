import Search from "./Search";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const arr = [
    "https://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2020%2F09%2F28%2FSpotifySimpleHero-01.png&w=728",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
  ];

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
            <Button type="icon-round">
              <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
            </Button>
          </span>
          <Button type="icon-round">
            <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        {arr.map((e, i) => (
          <div key={i} className="w-56 h-56">
            <Button type="play">
              <FontAwesomeIcon className="text-xs" icon={faPlay} />
            </Button>
            <img
              className="rounded-xl"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={e}
            />
          </div>
        ))}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;

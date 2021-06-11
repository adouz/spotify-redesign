import logo from "../../assets/Spotify_logo_with_text.svg";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faHome,
  faWindowRestore,
  faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const menu = [
    { title: "Home", icon: faHome },
    { title: "Browse", icon: faWindowRestore },
    { title: "Radio", icon: faBroadcastTower },
  ];

  const library = [
    "Made For You",
    "Recently played",
    "Liked Songs",
    "Albums",
    "Artists",
    "Podcasts",
  ];

  const playlists = ["Liked Songs"];
  return (
    <div
      style={{ gridArea: "side-bar" }}
      className="w-52 flex flex-col mx-3 mt-5"
    >
      <div className="flex flex-nowrap justify-between mb-5">
        <img src={logo} alt="logo" className="w-32" />
        <Button type="icon">
          <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
      </div>
      <div className="my-5 ml-2">
        {menu.map((item, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              item.title === "Home" ? "bg-white" : "text-gray-500"
            }`}
          >
            <FontAwesomeIcon className="mr-2" icon={item.icon} />
            <span className="font-bold text-sm">{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <span className="font-bold text-sm">YOUR LIBRARY</span>
        <ul>
          {library.map((title, i) => (
            <li key={i} className="text-gray-500 font-bold text-xs my-4 ml-3">
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-bold text-sm">PLAYLISTS</span>
        <ul>
          {playlists.map((title, i) => (
            <li key={i} className="text-gray-500 font-bold text-xs my-4 ml-3">
              {title}
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-5" />
      <div className="my-5">
        <Button type="round">
          <span className="font-bold text-sm">New Playlist</span>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;

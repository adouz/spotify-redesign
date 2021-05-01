import Search from "./Search";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
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
      <div className="flex flex-nowrap justify-between">
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
      <div className="">
        <div></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;

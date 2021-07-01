import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "./Wrapper";
import Input from "./Input";

function Search({ placeholder }) {
  return (
    <Wrapper>
      <Input type="text" placeholder={placeholder} />
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </Wrapper>
  );
}

export default Search;

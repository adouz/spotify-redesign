import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ placeholder }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        backgroundColor: "#E5E7EA",
        padding: "0.6rem",
        borderRadius: "0.65rem",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: "100%",
          backgroundColor: "#E5E7EA",
          fontWeight: "600",
          fontSize: "0.875rem",
        }}
      />
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
}

export default Search;

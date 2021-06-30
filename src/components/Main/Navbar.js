import styled from "styled-components";
import Search from "../Search";

const SearchWrapper = styled.div`
  width: 20rem;
`;

const Navbar = ({ name, avatar }) => {
  return (
    <div className="flex flex-nowrap justify-between">
      <SearchWrapper>
        <Search placeholder="Search" />
      </SearchWrapper>
      <div className="flex items-center mr-5">
        <span className="font-bold text-sm mr-3">{name}</span>
        <div className="w-8">
          <img className="rounded-full" src={avatar} alt="user-full-name" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Wrapper = styled.div`
    height: 66px;
`;

const Img = styled.img`
    width: 60px;
    border-radius: 1rem;
`;

const Artist = styled.span`
    color: #ABABAB;
`;

const Heart = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
`;

const SongCover = ({ img, name, title }) => {
    return (
    <Wrapper className="flex flex-row">
        <Img
        src={img}
        />
        <div className="mx-5">
            <p className="font-bold">{title}</p>
            <Artist>{name}</Artist>
        </div>
        <div>
            <Heart icon={faHeart} />
        </div>
    </Wrapper>
    );
}

export default SongCover;
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Card({ id, text, author, onDelete }) {
  return (
    <>
      <StyledEntry>
        <StyledText>{text}</StyledText>
        <StyledAuthor>Author: {author}</StyledAuthor>
        <AiOutlineCloseCircle size={20} onClick={() => onDelete(id)} />
      </StyledEntry>
    </>
  );
}

const StyledEntry = styled.section`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 5px black);
`;

const StyledAuthor = styled.p`
  color: #0084b2;
`;

const StyledText = styled.p`
  font-size: 20px;
`;

import styled from "styled-components";

export default function Card({ onEntry }) {
  return (
    <>
      {onEntry.map((entry) => {
        return (
          <>
            <StyledEntry>
              <StyledText>{entry.text}</StyledText>
              <StyledAuthor>Author: {entry.author}</StyledAuthor>
            </StyledEntry>
          </>
        );
      })}
    </>
  );
}

const StyledEntry = styled.section`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

const StyledAuthor = styled.p`
  color: #0084b2;
`;

const StyledText = styled.p`
  font-size: 20px;
`;

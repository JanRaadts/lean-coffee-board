import { use, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export default function Card({ id, text, author, onDelete, changedData }) {
  const [inEdit, setInEdite] = useState(false);
  console.log(inEdit);

  function handleEdit() {
    setInEdite(true);
  }

  function saveEdit(event) {
    event.preventDefault();
    let inputData = {
      id: id,
      text: event.target.elements.varText.value,
      author: event.target.elements.author.value,
    };
    event.target.reset();
    event.target.elements.varText.focus();
    changedData(inputData);
    setInEdite(false);
  }
  return (
    <>
      {inEdit == false ? (
        <StyledEntry>
          <StyledText>{text}</StyledText>
          <StyledAuthor>Author: {author}</StyledAuthor>
          <AiOutlineCloseCircle size={20} onClick={() => onDelete(id)} />
          <AiFillEdit size={20} onClick={handleEdit} />
        </StyledEntry>
      ) : (
        <StyledEntry>
          <form onSubmit={saveEdit}>
            <input
              type="text"
              name="varText"
              placeholder="Type your thoughts..."
              required
            ></input>
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              required
            ></input>
            <button type="submit">Ändern</button>
          </form>
        </StyledEntry>
      )}
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

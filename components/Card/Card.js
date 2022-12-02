import { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Card({ id, text, author, onDelete, changedData }) {
  const [inEdit, setInEdite] = useState(false);

  function handleEdit() {
    setInEdite(true);
  }

  function saveEdit(event) {
    event.preventDefault();
    let inputData = {
      id: id,
      text: event.target.elements.varText.value,
      name: event.target.elements.author.value,
    };
    event.target.reset();
    event.target.elements.varText.focus();
    changedData(inputData);
    setInEdite(false);
  }

  function handleBack() {
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
          <StyledForm onSubmit={saveEdit}>
            <StyledButton type="button" onClick={handleBack}>
              <AiOutlineClose />
            </StyledButton>
            <StyledInputText
              type="text"
              name="varText"
              placeholder={text}
              required
            ></StyledInputText>
            <StyledInputAuthor
              type="text"
              name="author"
              placeholder={author}
              required
            ></StyledInputAuthor>

            <StyledButton type="submit">
              <AiOutlineCheck />
            </StyledButton>
          </StyledForm>
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

const StyledInputText = styled.input`
  padding: 5px;
  width: 250px;
  height: 60px;
  border: none;
  border-bottom: 2px #0084b2 solid;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 15px;
`;

const StyledInputAuthor = styled.input`
  padding: 5px;
  height: 60px;
  border: none;
  border-bottom: 2px #0084b2 solid;
  font-size: 15px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  font-size: 30px;
  text-align: center;
  margin-left: 10px;
`;

const StyledForm = styled.form`
  background-color: white;

  display: flex;
  justify-content: center;
`;

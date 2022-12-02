import styled from "styled-components";
import Image from "next/image";
import { nanoid } from "nanoid";
import { AiOutlinePlus } from "react-icons/ai";

export default function Form({ entryData }) {
  function handleNewEntry(event) {
    event.preventDefault();
    let inputData = {
      id: nanoid(),
      text: event.target.elements.varText.value,
      name: event.target.elements.author.value,
    };
    event.target.reset();
    event.target.elements.varText.focus();
    entryData(inputData);
  }

  return (
    <>
      <StyledForm onSubmit={handleNewEntry}>
        <StyledInputText
          type="text"
          name="varText"
          placeholder="Type your thoughts..."
          required
        ></StyledInputText>
        <StyledInputAuthor
          type="text"
          name="author"
          placeholder="Your Name"
          required
        ></StyledInputAuthor>
        <StyledButton type="submit">
          {/* <Image src="/add-button.png" alt="button" width={1} height={1} /> */}
          <AiOutlinePlus />
        </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 4px #0084b2 solid;
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

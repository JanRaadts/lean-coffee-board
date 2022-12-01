import styled from "styled-components";
import Image from "next/image";

export default function Form({ entryData }) {
  function handleNewEntry(event) {
    event.preventDefault();
    let inputData = {
      text: event.target.elements.varText.value,
      author: event.target.elements.author.value,
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
          add
        </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  position: absolute;
  bottom: 0;
`;

const StyledInputText = styled.input`
  padding: 5px;
  width: 250px;
  height: 100px;
  border: none;
  font-size: 15px;
`;

const StyledInputAuthor = styled.input`
  padding: 5px;
  height: 100px;
  border: none;
  font-size: 15px;
`;

const StyledButton = styled.button`
  padding: 5px;
  height: 100px;
  border: none;
  width: 80px;
`;

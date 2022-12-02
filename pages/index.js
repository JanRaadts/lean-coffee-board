import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useState, useEffect } from "react";
import GlobalStyles from "../GlobalStyles";

export default function HomePage() {
  const [entrys, setEntrys] = useState([]);
  console.log(entrys);

  async function handleNewEntry(data) {
    // setEntrys([...entrys, data]);
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  }

  async function handleDelete(id) {
    setEntrys(entrys.filter((entry) => entry.id !== id));
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
  }

  async function handleChangedData(data) {
    console.log(data);

    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" +
        data.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // setEntrys(
    //   entrys.map((entry) => {
    //     if (entry.id == data.id) {
    //       return data;
    //     } else {
    //       return entry;
    //     }
    //   })
    // );
  }

  async function getQuestions() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    const questionList = await response.json();

    setEntrys(questionList);
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      {entrys.map((entry) => {
        return (
          <Card
            key={entry.id}
            id={entry.id}
            text={entry.text}
            author={entry.name}
            onDelete={handleDelete}
            changedData={handleChangedData}
          />
        );
      })}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Form entryData={handleNewEntry} />
    </>
  );
}

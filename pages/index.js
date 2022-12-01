import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import { useState } from "react";
import GlobalStyles from "../GlobalStyles";

export default function HomePage() {
  const [entrys, setEntrys] = useState([]);
  console.log(entrys);

  function handleNewEntry(data) {
    setEntrys([...entrys, data]);
  }

  function handleDelete(id) {
    setEntrys(entrys.filter((entry) => entry.id !== id));
  }

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
            author={entry.author}
            onDelete={handleDelete}
          />
        );
      })}
      <Form entryData={handleNewEntry} />
    </>
  );
}

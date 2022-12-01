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

  return (
    <>
      <GlobalStyles />
      <Header />
      <Card onEntry={entrys} />
      <Form entryData={handleNewEntry} />
    </>
  );
}

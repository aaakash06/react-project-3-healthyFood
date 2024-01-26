import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import List from "./assets/components/list";
import Heading from "./assets/components/heading";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import AddItem from "./assets/components/addItem";
import Container from "./assets/components/container";
function App() {
  const [arr, setCount] = useState([
    "Pizza",
    "cold drinks",
    "momos",
    "chowmin",
  ]);

  let addItem = (newItem, e) => {
    setCount([...arr, newItem]);
  };

  return (
    <Container>
      <Heading></Heading>
      <AddItem func={addItem}></AddItem>
      <List list={arr}></List>
    </Container>
  );
}

export default App;

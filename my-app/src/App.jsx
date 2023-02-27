import React from "react";
import Card from "./Card";
import contact from "./contact";

function App() {
  return (
    <div>
      <Card
        id={contact[0].id}
        name={contact[0].name}
        img={contact[0].imgURL}
        email={contact[0].email}
        phone={contact[0].phone}
      />
      <Card
        id={contact[1].id}
        name={contact[1].name}
        img={contact[1].imgURL}
        email={contact[1].email}
        phone={contact[1].phone}
      />
      <Card
        id={contact[2].id}
        name={contact[2].name}
        img={contact[2].imgURL}
        email={contact[2].email}
        phone={contact[2].phone}
      />
    </div>
  );
}
export default App;

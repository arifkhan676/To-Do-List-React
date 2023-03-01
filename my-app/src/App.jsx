import React from "react";
import Card from "./Card";
import contact from "./contact";
import Avatar from "./Avatar";
function App() {
  return (
    <div>
              <Avatar img="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/333064775_569180981619397_3510004848465821387_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wHSEdoe7Iw4AX_iHITl&_nc_ht=scontent.fdac135-1.fna&oh=00_AfCAEBMMhucVpwWHYRQO__or-qQv7nt4T97MTAJHHj8tcw&oe=64041C01"/> 

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

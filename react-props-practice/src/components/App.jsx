import React from "react";
import contacts from "../contacts";
import Card from "./Card";
function App() {
  for (var i = 0; i < 3; i++) {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <Card
          Name={contacts[i].name}
          profile_images={contacts[i].imgURL}
          tel={contacts[i].phone}
          mail={contacts[i].email}
        ></Card>
        <Card
          variable={i++}
          Name={contacts[i].name}
          profile_images={contacts[i].imgURL}
          tel={contacts[i].phone}
          mail={contacts[i].email}
        ></Card>

        <Card
          variable={i++}
          Name={contacts[i].name}
          profile_images={contacts[i].imgURL}
          tel={contacts[i].phone}
          mail={contacts[i].email}
        ></Card>
      </div>
    );
  }
}
export default App;

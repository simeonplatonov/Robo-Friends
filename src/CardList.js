import React from "react";
import Card from "./card";
import {robots} from "./robots";
const CardList = () =>{
  return(
    <div>
      <Card name={robots[0].name} email={robots[0].email} />
      <Card name={robots[1].name} email={robots[1].email}/>
      <Card name={robots[2].name} email={robots[2].email}/>
      <Card name={robots[3].name} email={robots[3].email}/>
      <Card name={robots[4].name} email={robots[4].email}/>
      <Card name={robots[5].name} email={robots[5].email}/>
      <Card name={robots[6].name} email={robots[6].email}/>
      <Card name={robots[7].name} email={robots[7].email}/>
      <Card name={robots[8].name} email={robots[8].email}/>
      <Card name={robots[9].name} email={robots[9].email}/>
      </div>

  );
}
export default CardList;
